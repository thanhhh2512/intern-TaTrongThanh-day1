// src/lib/theme.js
export async function getTheme() {
  const res = await fetch("http://localhost:3000/api/partner/theme", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch theme");
  }

  return res.json();
}
