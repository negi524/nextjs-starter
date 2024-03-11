"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function LoginPage() {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      <Container>
        <h1>ログインページ</h1>
        {isLogin ? <p>ログイン中です</p> : <p>未ログインです</p>}
      </Container>
    </>
  );
}
