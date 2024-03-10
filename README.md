This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, copy file from `.env.local.sample`

```bash
cp .env.local.sample .env.local
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## バージョン管理

パッケージのバージョンと git のバージョンを同期させるため、PR 段階でのバージョン上げは`--no-git-tag-version`オプションを付けて実施する。

```bash
yarn version --patch --no-git-tag-version
```

また、`main`ブランチマージ時に、`package.json`のバージョン内容をもとに自動的にタグが切られる。
