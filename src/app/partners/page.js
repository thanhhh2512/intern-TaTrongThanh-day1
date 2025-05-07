"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PartnersPage() {
  const [partners, setPartners] = useState([]);

  // Fetch danh sách các partner từ API hoặc dữ liệu tĩnh
  useEffect(() => {
    async function fetchPartners() {
      const res = await fetch("http://localhost:3000/api/partners");
      const data = await res.json();
      setPartners(data);
    }
    fetchPartners();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Partners Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-center space-x-4"
          >
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {partner.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {partner.description.slice(0, 80)}...
              </p>
              <Link
                href={`/partners/${partner.slug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
