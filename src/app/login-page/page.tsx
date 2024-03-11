"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function LoginPage() {
  const [isLogin, setLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  /**
   * ログイン状態のDOM
   */
  const loginView: JSX.Element = (
    <>
      <p>ログイン中です</p>
      <p>メールアドレス: {email}</p>
    </>
  );

  /**
   * 未ログイン状態のDOM
   */
  const logoutView: JSX.Element = (
    <>
      <p>未ログインです</p>
      <form action="POST">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="ログイン" />
      </form>
    </>
  );
  return (
    <>
      <Container>
        <h1>ログインページ</h1>
        {isLogin ? loginView : logoutView}
      </Container>
    </>
  );
}
