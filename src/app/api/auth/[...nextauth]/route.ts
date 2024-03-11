// https://next-auth.js.org/getting-started/example
import { randomBytes, randomUUID } from "crypto";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  debug: true,
  // Configure one or more authentication providers
  providers: [
    Credentials({
      id: "user",
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
  // secret
  // secret: process.env.NEXTAUTH_SECRET,
  // // jwt
  // jwt: {
  //   maxAge: 3 * 24 * 60 * 60, // 3 days
  // },
  // /* session */
  // session: {
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  //   updateAge: 24 * 60 * 60, // 24 hours
  //   generateSessionToken: () => {
  //     return randomUUID?.() ?? randomBytes(32).toString("hex");
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
