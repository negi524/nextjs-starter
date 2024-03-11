"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [isLogin, setLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  async function formAction(formData: FormData) {
    const result = await signIn("user", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (result?.error) {
      console.error("ログイン失敗");
      setLogin(false);
    } else {
      console.log("ログイン成功");
      setLogin(true);
    }
  }

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
      <form action={formAction}>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">パスワード</label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="ログイン" />
      </form>
      <p>未ログインです</p>
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
