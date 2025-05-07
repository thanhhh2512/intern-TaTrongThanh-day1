import { handleSignIn } from "@logto/next/server-actions";
import { redirect } from "next/navigation";
import { logtoConfig } from "../../logto";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  await handleSignIn(logtoConfig, searchParams);

  redirect("/");
}
