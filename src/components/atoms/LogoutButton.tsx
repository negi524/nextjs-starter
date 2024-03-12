"use client";
import { signOut } from "next-auth/react";

/**
 * ログアウトボタン
 * @returns ログアウトボタン
 */
export default function LogoutButton(props: { email: string }) {
  return (
    <>
      <p>ログイン中です</p>
      <p>メールアドレス: {props.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
