This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, copy file from `.env.local.sample`

```bash
cp .env.local.sample .env.local
```

Second, set up the Firebase API key.

```bash
# .env.local
FIREBASE_API_KEY=<API_KEY>
```

Thrid, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## バージョン管理

以下のコマンドにより、`package.json`のバージョンが上がる

```bash
yarn version patch --immediate
```

また、`main`ブランチマージ時に、`package.json`のバージョン内容をもとに自動的にタグが切られる。
