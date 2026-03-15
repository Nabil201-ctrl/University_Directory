import React from "react";
import ContentBox from "./ui/Content";

interface University {
  name: string;
  country: string;
}

export default async function Page() {
  const response = await fetch("http://universities.hipolabs.com/search?country=United+Kingdom");
  const universities: University[] = await response.json();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 container mx-auto py-12">
      <h1 className="header-text text-4xl font-extrabold text-blue-800 mb-8 tracking-tight">
        University Directory
      </h1>
      <ContentBox universities={universities} />
    </div>
  );
}