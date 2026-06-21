// 依存ライブラリ無しで PWA 用 PNG アイコンを生成する（Node 標準の zlib で PNG エンコード）。
// 使い方: node scripts/gen-icons.mjs
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public')
mkdirSync(outDir, { recursive: true })

// ---- PNG encode helpers ----
const crcTable = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()
function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const t = Buffer.from(type, 'ascii')
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0)
  return Buffer.concat([len, t, data, crc])
}
function encodePng(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type RGBA
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0 // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride)
  }
  const idat = deflateSync(raw, { level: 9 })
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))])
}

// ---- drawing ----
function lerp(a, b, t) {
  return Math.round(a + (b - a) * t)
}
function drawIcon(size) {
  const buf = Buffer.alloc(size * size * 4)
  const set = (x, y, r, g, b) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return
    const i = (y * size + x) * 4
    buf[i] = r
    buf[i + 1] = g
    buf[i + 2] = b
    buf[i + 3] = 255
  }
  const s = size / 512
  // 背景: 緑の縦グラデーション
  for (let y = 0; y < size; y++) {
    const t = y / (size - 1)
    const r = lerp(0x16, 0x14, t)
    const g = lerp(0xa3, 0x53, t)
    const b = lerp(0x4a, 0x2d, t)
    for (let x = 0; x < size; x++) set(x, y, r, g, b)
  }
  const tri = (p0, p1, p2, r, g, b) => {
    const xs = [p0[0], p1[0], p2[0]].map((v) => v * s)
    const ys = [p0[1], p1[1], p2[1]].map((v) => v * s)
    const minX = Math.max(0, Math.floor(Math.min(...xs)))
    const maxX = Math.min(size - 1, Math.ceil(Math.max(...xs)))
    const minY = Math.max(0, Math.floor(Math.min(...ys)))
    const maxY = Math.min(size - 1, Math.ceil(Math.max(...ys)))
    const d = (ax, ay, bx, by, cx, cy) => (bx - ax) * (cy - ay) - (by - ay) * (cx - ax)
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const d1 = d(xs[0], ys[0], xs[1], ys[1], x, y)
        const d2 = d(xs[1], ys[1], xs[2], ys[2], x, y)
        const d3 = d(xs[2], ys[2], xs[0], ys[0], x, y)
        const neg = d1 < 0 || d2 < 0 || d3 < 0
        const pos = d1 > 0 || d2 > 0 || d3 > 0
        if (!(neg && pos)) set(x, y, r, g, b)
      }
    }
  }
  const circle = (cx, cy, rad, r, g, b) => {
    cx *= s
    cy *= s
    rad *= s
    for (let y = Math.floor(cy - rad); y <= Math.ceil(cy + rad); y++) {
      for (let x = Math.floor(cx - rad); x <= Math.ceil(cx + rad); x++) {
        if ((x - cx) ** 2 + (y - cy) ** 2 <= rad * rad) set(x, y, r, g, b)
      }
    }
  }
  // 太陽
  circle(372, 148, 58, 0xfd, 0xe0, 0x47)
  // 山々（奥→手前）
  tri([256, 150], [64, 452], [448, 452], 0xf8, 0xfa, 0xfc)
  tri([372, 258], [232, 452], [500, 452], 0xbb, 0xf7, 0xd0)
  tri([150, 300], [20, 452], [280, 452], 0xdc, 0xfc, 0xe7)
  return encodePng(size, size, buf)
}

const targets = [
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['apple-touch-icon.png', 180],
  ['icon-maskable-512.png', 512],
]
for (const [name, size] of targets) {
  writeFileSync(join(outDir, name), drawIcon(size))
  console.log('generated', name)
}
