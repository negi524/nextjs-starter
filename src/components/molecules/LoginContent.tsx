import { signIn, signOut, useSession } from "next-auth/react";

/**
 * ログイン状態によってコンテンツを出し分ける
 * @returns ログイン状態を表示する
 */
export default function LoginContent() {
  const { data: session } = useSession();

  // ログイン状態のDOM
  const loginView: JSX.Element = (
    <>
      <p>ログイン中です</p>
      <p>メールアドレス: {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
  // 未ログイン状態のDOM
  const logoutView: JSX.Element = (
    <>
      <p>未ログインです</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );

  if (session) {
    return loginView;
  } else {
    return logoutView;
  }
}
