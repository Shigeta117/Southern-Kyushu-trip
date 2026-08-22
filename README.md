# 南九州＆屋久島 3泊4日 旅のしおり 🏔️

熊本・阿蘇・高千穂・宮崎・霧島・桜島・鹿児島・屋久島をめぐる
**2026/8/23(日)〜8/26(水)・3名** の旅程を、
スマホで使いやすくまとめた **モバイルファースト PWA** です。

熊本空港 IN／屋久島空港 OUT の片道動線。1日目の夜は宮崎まで走り、
2日目夕方に鹿児島でレンタカーを返し、3日目の朝に高速船で屋久島へ渡ります。

- 📱 **モバイル第一設計** — 上部に Day 切替、下部にタブナビ（日程／地図／費用／情報）
- 🗺️ **地図・ナビ強化** — 日別フィルタ付き Leaflet 地図、各スポットから Google マップの経路案内へ
- 💴 **費用の目安** — 出発地（大阪・京都／関東）別に1人あたり概算を切替表示（3名割り）
- 📡 **オフライン対応（PWA）** — ホーム画面に追加でき、一度開けば電波の弱い屋久島の山中でも閲覧可
- ☔ **夏向けの実用情報** — 屋久島の雨・桜島の降灰・火山警戒レベル・熱中症・台風・緊急連絡先

> ⚠️ 料金・時刻・規制（火口閉鎖、フェリー欠航 等）は変動します。表示はすべて **「目安」** です。
> 出発前に各公式サイトで最新情報を必ず確認してください。

## 技術スタック

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite`）
- [Leaflet](https://leafletjs.com/)（地図、タイルは CARTO Voyager）
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)（Service Worker / オフライン）
- アイコン: [lucide-react](https://lucide.dev/) ／ フォント: Noto Sans JP（Google Fonts）

## 開発

```bash
npm install
npm run dev        # 開発サーバー → http://localhost:3170
npm run build      # 型チェック + 本番ビルド（dist/ に出力）
npm run preview    # 本番ビルドをローカル確認 → http://localhost:3171
```

> **dev は 3170 / preview は 3171。** ポートの割り当て正本は brain の `life/dev-ports.md`。
> `strictPort: true` を付けてあるので、埋まっていたら隣へ逃げずに落ちる。
> その場合は他プロジェクトが 3170 番台を掴んでいないか調べること（勝手に kill しない）。

旅程の内容は `src/data/` を編集するだけで更新できます（UIコンポーネントは触らなくてOK）。

| ファイル | 役割 |
|---|---|
| `src/data/trip.ts` | 旅程（Day／各スポット・時刻・座標・メモ） |
| `src/data/mapData.ts` | 地図のマーカーとルート |
| `src/data/transport.ts` | 移動・予約（高速船／フェリー／レンタカー／アクセス） |
| `src/data/budget.ts` | 費用の目安 |
| `src/data/packing.ts` | 持ち物チェックリスト |
| `src/data/safety.ts` | 緊急・実用情報・公式リンク |

アイコン画像（PWA用）は `node scripts/gen-icons.mjs` で再生成できます（依存ライブラリ不要）。

## デプロイ（GitHub Pages）

`base: './'`（相対パス）で出力しているため、**リポジトリ名が変わってもサブパス配信で壊れません**。
特別な設定変更は不要です。

1. GitHub リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定
2. `main` ブランチに push すると `.github/workflows/deploy.yml` が自動でビルド＆公開
3. 公開URL（例: `https://<ユーザー名>.github.io/<リポジトリ名>/`）をメンバーに共有

> 独自ドメインやルート（`/`）配信にする場合のみ、`vite.config.ts` の `base` を `'/'` に変更してください。

スマホでURLを開き、ブラウザの「ホーム画面に追加」でアプリのように使えます。
