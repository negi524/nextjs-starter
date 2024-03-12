import { getServerSession } from "next-auth";
import LogoutButton from "../atoms/LogoutButton";
import LoginButton from "../atoms/LoginButton";

/**
 * ログイン状態によってコンテンツを出し分ける
 * @returns ログイン状態を表示する
 */
export default async function LoginContent() {
  const session = await getServerSession();

  if (session) {
    return <LogoutButton email={session?.user?.email} />;
  } else {
    return <LoginButton />;
  }
}
