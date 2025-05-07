import { notFound } from "next/navigation";

// Hàm lấy dữ liệu partner
async function getPartner(slug) {
  const res = await fetch(`http://localhost:3000/api/partners/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PartnerPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const partner = await getPartner(slug);
  if (!partner) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <img
          src={partner.logoUrl}
          alt={partner.name}
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold text-gray-900">{partner.name}</h1>
        <p className="text-xl text-gray-600">{partner.description}</p>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Information
        </h2>
        <ul className="space-y-2">
          <li>
            <strong className="text-gray-600">Website:</strong>{" "}
            <a
              href={partner.website}
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {partner.website}
            </a>
          </li>
          <li>
            <strong className="text-gray-600">Email:</strong>{" "}
            <a
              href={`mailto:${partner.contact}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {partner.contact}
            </a>
          </li>
          <li>
            <strong className="text-gray-600">Location:</strong>{" "}
            {partner.location}
          </li>
        </ul>
      </div>

      {/* Services */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Services Offered
        </h2>
        <ul className="space-y-2">
          {partner.services.map((service, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">
              - {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
        <p>
          &copy; {new Date().getFullYear()} Tạ Trọng Thành. All rights reserved.
        </p>
      </div>
    </div>
  );
}
