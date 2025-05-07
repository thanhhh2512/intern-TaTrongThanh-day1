export async function GET() {
  const partners = [
    {
      id: 1,
      slug: "partner-a",
      name: "Partner A",
      description:
        "Partner A is a leading provider of cutting-edge technology solutions with a focus on AI and machine learning.",
      website: "https://www.partner-a.com",
      contact: "info@partner-a.com",
      location: "New York, USA",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhGkHrM-IfzcDLtQ3x7kjql2SSGNKjiDYug&s",
      services: [
        "AI Development",
        "Machine Learning Solutions",
        "Cloud Computing",
      ],
    },
    {
      id: 2,
      slug: "partner-b",
      name: "Partner B",
      description:
        "Partner B specializes in financial technology solutions with a deep expertise in blockchain and cryptocurrency.",
      website: "https://www.partner-b.com",
      contact: "support@partner-b.com",
      location: "London, UK",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&s",
      services: [
        "Blockchain Development",
        "Cryptocurrency Solutions",
        "Smart Contracts",
      ],
    },
  ];

  return new Response(JSON.stringify(partners), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
