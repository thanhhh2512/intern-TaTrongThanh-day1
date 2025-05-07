// src/app/api/insights/route.js

export async function GET(req) {
  // Giả lập một mảng dữ liệu (có thể thay thế bằng dữ liệu thực từ cơ sở dữ liệu)
  const insights = [
    {
      id: 1,
      title: "Soil Testing Essentials",
      description:
        "Regular soil tests help farmers understand nutrient levels for optimal growth.",
      tag: "Soil",
    },
    {
      id: 2,
      title: "Compost Techniques for Healthy Soil",
      description: "Improve soil fertility with simple composting methods.",
      tag: "Soil",
    },
    {
      id: 3,
      title: "Smart Irrigation with Sensors",
      description: "Use soil moisture sensors to automate and conserve water.",
      tag: "Water",
    },
    {
      id: 4,
      title: "Rainwater Harvesting Tips",
      description: "Collect and store rainwater effectively for farm use.",
      tag: "Water",
    },
    {
      id: 5,
      title: "Crop Rotation for Soil Health",
      description: "Rotate crops yearly to naturally replenish nutrients.",
      tag: "Planting",
    },
    {
      id: 6,
      title: "Best Seasons for Leafy Greens",
      description: "Timing your planting boosts yield and quality.",
      tag: "Planting",
    },
    {
      id: 7,
      title: "Integrated Pest Management",
      description:
        "Combine biological and mechanical methods to control pests.",
      tag: "Pest Management",
    },
    {
      id: 8,
      title: "Attracting Beneficial Insects",
      description:
        "Use flowers and companion planting to reduce harmful pests.",
      tag: "Pest Management",
    },
    {
      id: 9,
      title: "Ventilation in Greenhouses",
      description: "Proper airflow prevents mold and supports plant growth.",
      tag: "Greenhouse",
    },
    {
      id: 10,
      title: "Hydroponics in Greenhouse Farming",
      description:
        "Grow plants without soil using nutrient-rich water solutions.",
      tag: "Greenhouse",
    },
  ];

  return new Response(JSON.stringify(insights), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
