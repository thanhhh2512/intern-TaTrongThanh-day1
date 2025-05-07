// src/app/api/partner/theme/route.js
export async function GET() {
  return Response.json({
    primaryColor: "#1e40af",
    backgroundColor: "#f8fafc",
    textColor: "#0f172a",
  });
}
