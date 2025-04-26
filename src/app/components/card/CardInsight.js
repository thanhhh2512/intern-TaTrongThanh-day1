import React from "react";
import "@/style/globals.css";
export default function CardInsight({ title, description }) {
  return (
    <div className="w-3xs xs:w-xs sm:w-sm md:w-md lg:w-lg   rounded-xl p-6 ">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-base text-gray-600 dark:text-white">{description}</p>
      </div>
    </div>
  );
}
