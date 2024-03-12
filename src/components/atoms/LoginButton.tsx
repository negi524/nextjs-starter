"use client";
import { signIn } from "next-auth/react";

/**
 * ログインボタン
 * @returns ログインボタン
 */
export default function LoginButton() {
  return (
    <>
      <p>未ログインです</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
