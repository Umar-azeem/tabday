"use client";
import React from "react";
import Filter  from "./filter";
import DailyActiveUsers from "./dailyActiveUsers";
import SourceOfOrder from "./sourceOfOrder";
import OpenAppRate from "./openAppRate";
import SourceOfVisitors from "./sourceOfVisitors";
import AverageOrderFrequency from "./averageOrderFrequency";
import AverageSessionLength from "./averageSessionLength";
import OrderByNewVsOld from "./orderByNewVsOld";
function Retentions() {
  return (
    <>
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-2 md:mx-4 ">
        <div className=" rounded-lg border cursor-pointer">
            <DailyActiveUsers/>
        </div>
        <div className=" rounded-lg border cursor-pointer">
            <SourceOfOrder/>
        </div>
        <div className=" rounded-lg border cursor-pointer">
            <OpenAppRate/>
        </div>
        <div className="rounded-lg border cursor-pointer">
           <SourceOfVisitors/>
        </div>
        <div className="rounded-lg border cursor-pointer">
          <OrderByNewVsOld/>
        </div>
        <div className="rounded-lg border cursor-pointer">
          < AverageSessionLength/>
        </div>
        <div className="rounded-lg border cursor-pointer">
          <AverageOrderFrequency/>
        </div>
      </div>
    </>
  );
}

export default Retentions;
