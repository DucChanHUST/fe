"use client";

import ChartSection from "./component/ChartSection";
import FormSection from "./component/FormSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white py-12 lg:px-80 md:px-20 sm:px-10">
      <ChartSection />
      <FormSection />
    </div>
  );
}
