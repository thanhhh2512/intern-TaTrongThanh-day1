"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetchData } from "../../../utils/fetch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fetcher = (url) => fetchData(url);

const InsightList = () => {
  const { data, error, isLoading } = useSWR("/api/insight", fetcher);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    if (data) {
      const groupedByTag = data.reduce((acc, insight) => {
        (acc[insight.tag] = acc[insight.tag] || []).push(insight);
        return acc;
      }, {});

      const tags = Object.keys(groupedByTag);
      if (tags.length > 0) {
        setSelectedTag(tags[0]); // Chọn tag đầu tiên khi data đã có
      }
    }
  }, [data]); // Cập nhật khi data thay đổi

  if (isLoading)
    return <p className="text-center text-gray-500">Loading insights...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  // Tính groupedByTag sau khi data đã có
  const groupedByTag = data?.reduce((acc, insight) => {
    (acc[insight.tag] = acc[insight.tag] || []).push(insight);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      <Tabs
        value={selectedTag}
        onValueChange={setSelectedTag}
        className="w-full max-w-6xl mx-auto"
      >
        {/* Dropdown lọc cho mobile */}
        <div className="sm:hidden mb-4">
          <Select
            value={selectedTag}
            onValueChange={(val) => setSelectedTag(val)}
          >
            <SelectTrigger className="w-full bg-white shadow">
              <SelectValue placeholder="Select Tag" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(groupedByTag).map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TabsList
          className={`hidden sm:grid w-full sm:grid-cols-3 md:grid-cols-5 gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full shadow-md mb-8`}
        >
          {Object.keys(groupedByTag).map((tag) => (
            <TabsTrigger
              key={tag}
              value={tag}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-800 bg-white shadow hover:bg-blue-100 transition-all duration-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              {tag}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(groupedByTag).map((tag) => (
          <TabsContent
            key={tag}
            value={tag}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 display-block"
          >
            {groupedByTag[tag].map((insight) => (
              <Card
                key={insight.id}
                className="relative overflow-hidden group border-none shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-transparent to-purple-200 opacity-20 group-hover:opacity-40 transition-all duration-300 z-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {insight.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    {insight.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="relative z-10 flex justify-end px-6">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default InsightList;
