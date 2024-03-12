// https://next-auth.js.org/getting-started/example
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  debug: true,
  // Configure one or more authentication providers
  providers: [
    Credentials({
      // id: "user",
      credentials: {
        email: {
          label: "メールアドレス",
          type: "email",
          placeholder: "メールアドレス",
        },
        password: {
          label: "パスワード",
          type: "password",
        },
      },
      async authorize(credentials) {
        // firebaseの認証APIを叩く
        const authResponse = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          },
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return user;
      },
    }),
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
