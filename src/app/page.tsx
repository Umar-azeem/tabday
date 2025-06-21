"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
// ✅ Dynamic imports from corrected folder
const Retentions = dynamic(() => import("./analytics/components/Retention/Retention"), { ssr: false });
const CustomerFunnel = dynamic(() => import("./analytics/components/CustomerFunnel/CustomerFunnel"), { ssr: false });
const PushPerformance = dynamic(() => import("./analytics/components/PushPerformance/pushPerformance"), { ssr: false });
const Overview = dynamic(() => import("./analytics/components/Overview/Overview"), { ssr: false });

const Home = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-lg font-bold">Analytics</h1>
        <p className="text-sm text-gray-500">
          Get information about your app and make smart business decisions.
        </p>
      </div>

      <div className="flex justify-center">
        <Tabs
          defaultValue="Overview"
          className="w-full flex justify-center items-center"
        >
          <TabsList className="bg-gray-100 rounded flex h-auto">
            <TabsTrigger value="Overview" className="px-12 py-3 rounded text-xs font-medium text-gray-700 data-[state=active]:text-[#342AEF] data-[state=active]:bg-white data-[state=active]:shadow-sm transition">
              Overview
            </TabsTrigger>
            <TabsTrigger value="Retention" className="px-12 py-3 rounded text-xs font-medium text-gray-700 data-[state=active]:text-[#342AEF] data-[state=active]:bg-white data-[state=active]:shadow-sm transition">
              Retention
            </TabsTrigger>
            <TabsTrigger value="Customer funnel" className="px-12 py-3 rounded text-xs font-medium text-gray-700 data-[state=active]:text-[#342AEF] data-[state=active]:bg-white data-[state=active]:shadow-sm transition">
              Customer funnel
            </TabsTrigger>
            <TabsTrigger value="Push performance" className="px-12 py-3 rounded text-xs font-medium text-gray-700 data-[state=active]:text-[#342AEF] data-[state=active]:bg-white data-[state=active]:shadow-sm transition">
              Push performance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Overview" className="w-full">
            <Overview />
          </TabsContent>
          <TabsContent value="Retention" className="w-full">
            <Retentions />
          </TabsContent>
          <TabsContent value="Customer funnel" className="w-full">
            <CustomerFunnel />
          </TabsContent>
          <TabsContent value="Push performance" className="w-full">
            <PushPerformance />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Home;
