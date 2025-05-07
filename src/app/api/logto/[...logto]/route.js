import { signIn, signOut, getLogtoContext } from "@logto/next/server-actions";

import { logtoConfig } from "../../../../logto";

export const GET = async (req) => {
  const action = req.url.split("/").pop(); // Lấy action từ URL (ví dụ: "sign-in", "sign-out", "context")

  if (action === "sign-in") {
    // Xử lý đăng nhập
    const options = { redirectUri: "http://localhost:3000/admin/checkin" }; // Tùy chỉnh theo yêu cầu
    const interactionMode = "popup"; // Hoặc tùy chỉnh
    await signIn(logtoConfig, options, interactionMode);
    return new Response("Redirecting to sign-in...", { status: 302 });
  }

  if (action === "sign-out") {
    // Xử lý đăng xuất
    const redirectUri = "http://localhost:3000/callback"; // Tùy chỉnh
    await signOut(logtoConfig, redirectUri);
    return new Response("Redirecting to sign-out...", { status: 302 });
  }

  if (action === "context") {
    // Lấy context người dùng
    const context = await getLogtoContext(logtoConfig);
    return new Response(JSON.stringify(context), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Action not found", { status: 404 });
};
