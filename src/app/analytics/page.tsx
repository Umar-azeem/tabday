import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "./(components)/overview";

function page() {
 

  return (
    <>
     <div> 
      <div className="p-6">
        <h1 className="text-lg font-bold"> Analytics</h1>
        <p className="text">
          Get information about your app and make smart business decisions.
        </p>
     </div>
     
<div className="flex justify-center ">
    <Tabs defaultValue="" className="w-full flex justify-center items-center ">
 
<TabsList className="bg-gray-100  rounded flex h-auto ">
  <TabsTrigger
    value="Overview"
    className="px-12 py-3 rounded text-xs font-medium text-gray-700 
               data-[state=active]:text-[#342AEF] data-[state=active]:bg-white 
               data-[state=active]:shadow-sm transition"
  >
    Overview
  </TabsTrigger>

  <TabsTrigger
    value="Retention"
    className="px-12 py-3 rounded text-xs font-medium text-gray-700 
               data-[state=active]:text-[#342AEF] data-[state=active]:bg-white 
               data-[state=active]:shadow-sm transition"
  >
    Retention
  </TabsTrigger>

  <TabsTrigger
    value="Customer funnel"
    className="px-12 py-3 rounded text-xs font-medium text-gray-700 
               data-[state=active]:text-[#342AEF] data-[state=active]:bg-white 
               data-[state=active]:shadow-sm transition"
  >
    Customer funnel
  </TabsTrigger>

  <TabsTrigger
    value="Push performance"
    className="px-12 py-3 rounded text-xs font-medium text-gray-700 
               data-[state=active]:text-[#342AEF] data-[state=active]:bg-white 
               data-[state=active]:shadow-sm transition"
  >
    Push performance
  </TabsTrigger>
</TabsList>


  <TabsContent  value="Overview" className="w-full ">
    <div className="w-full">
       <Overview/>
     </div></TabsContent>
  <TabsContent value="Retention">Change your password here.</TabsContent>
  <TabsContent  value="Customer funnel">Make changes to your account here.</TabsContent>
  <TabsContent value="Push performance">Change your password here.</TabsContent>
</Tabs>
</div>
</div>
    </>
  );
}
export default page;
