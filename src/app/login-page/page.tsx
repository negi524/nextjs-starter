"use client";
import { Container } from "react-bootstrap";
import {
  SessionProvider,
  SignInResponse,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import LoginContent from "@/components/molecules/LoginContent";

export default function LoginPage() {
  // async function formAction(formData: FormData) {
  //   const result: SignInResponse | undefined = await signIn("user", {
  //     redirect: false,
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //   });

  //   if (result?.error) {
  //     console.error("ログイン失敗");
  //     setLogin(false);
  //   } else {
  //     console.log("ログイン成功");
  //     setLogin(true);
  //   }
  // }

  return (
    <>
      <SessionProvider>
        <Container>
          <h1>ログインページ</h1>
          <LoginContent />
        </Container>
      </SessionProvider>
    </>
  );
}
