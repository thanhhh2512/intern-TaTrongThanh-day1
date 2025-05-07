import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import "@/style/globals.css";

export default function CardInsight({ title, description }) {
  return (
    <div className="w-3xs xs:w-xs sm:w-sm md:w-md lg:w-lg">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
