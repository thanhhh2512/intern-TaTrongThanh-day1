// components/ViewDashboardButton.jsx
"use client";

import { useRouter } from "next/navigation";

export default function ViewDashboardButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/stats");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      View Dashboard
    </button>
  );
}
