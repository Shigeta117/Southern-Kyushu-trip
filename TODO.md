# 将来タスク / バックログ

南九州＆屋久島 旅のしおり（Vite + React + TS + Tailwind v4 + PWA）の未対応・改善候補。
※ 初回リリース時点で CRITICAL/HIGH は 0 件、ビルド/型チェック/モバイル実機表示は確認済み。

---

## 1. コード品質（code-reviewer 指摘の未対応分）

| 重大度 | 項目 | 内容 | 対象ファイル |
|---|---|---|---|
| MEDIUM | Leaflet 再初期化の理論リスク | StrictMode 下では動作確認済みだが、環境次第で「Map container is already initialized」が出る可能性。`container._leaflet_id` のクリアや `key` での明示破棄を検討 | `src/components/TripMap.tsx` |
| LOW | 再描画 effect の依存配列 | `mapPoints` / `routeSegments` を依存に含めていない（現状は定数で実害なし）。データを動的化する際に追加が必要 | `src/components/TripMap.tsx` |
| LOW | テキストのコントラスト | `text-slate-400` 等が WCAG AA 境界。地図下キャプションやリセット文言を `slate-500` 以上へ | 各コンポーネント / `src/index.css` |
| LOW | `mapData` の order 検証 | マーカー番号 `order` の重複・欠番を防ぐ開発時アサーションが無い | `src/data/mapData.ts` |
| LOW | Icon の name 型安全 | `Icon` の `name: string` がフリーテキストで、タイプミスを実行時に握る（`CircleHelp` 表示）。`keyof typeof iconMap` のユニオン型にして compile time で検出 | `src/components/Icon.tsx`, 利用側 |
| LOW | 下部タブのジャンプ非対称 | `持ち物`/`緊急` 表示中は「情報」をハイライトするが、タブを押すと `移動・予約` 先頭へ戻る。サブナビ追加 or 仕様として許容 | `src/components/BottomNav.tsx`, `src/App.tsx` |

> 対応済み（参考）: AppBar のタップ領域 40px 化 / 持ち物チェックの安定ID化 / アコーディオンの `aria-controls` / `seg2color`→`dayToColor` 改名。

---

## 2. 機能拡張アイデア

| 優先度 | 項目 | 内容 |
|---|---|---|
| 中 | 実際の旅行日付に対応 | `tripMeta` に出発日を持たせ、各 Day に日付（曜日）を表示。曜日で高千穂峡ボート料金（平日/繁忙期）や混雑を出し分け |
| 中 | JS バンドルの軽量化 | 現状 408KB（gzip 127KB）。Leaflet と地図セクションを `React.lazy` で遅延読込し初期表示を高速化 |
| 中 | 各区間の移動距離・所要時間 | ルート区間に「車で約◯分／◯km」を表示（ナビ強化の続き） |
| 低 | スポット写真サムネ | 各スポットに画像（要オフライン考慮：軽量WebP同梱 or 遅延読込） |
| 低 | 共有ボタン | Web Share API でしおりURLをLINE等へ共有 |
| 低 | 天気ウィジェット | 屋久島・桜島のピンポイント天気/降灰予報への動線を情報タブに集約（リンクは実装済み、表示強化） |
| 低 | iOS apple-touch-icon 最適化 | 角丸・余白を iOS 向けに調整した PNG を別途用意 |

---

## 3. 運用メモ

- 料金・時刻・規制（火口閉鎖、フェリー欠航、協力金額）は**変動**。出発が近づいたら `src/data/*` を最新値に更新する。
- 阿蘇・中岳火口は 2026/6 時点で見学閉鎖中。再開したら `src/data/trip.ts` の Day1 バッジ/メモを更新。
- デプロイは `main` push → GitHub Actions（`.github/workflows/deploy.yml`）。`base: './'` のためリポジトリ名変更の影響なし。
