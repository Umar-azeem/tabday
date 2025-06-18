"use client";
import BasicChart from "./basicChart";
import React from "react";
import Filter from "./filter";
import LineWithDataLabel from "./lineWithDataLabel";
import MobileAppRevenue from "./mobileAppRevenue";
import Platform from "./platfrom";
import Retention from "./retention";
import TotalAppUsers from "./totalAppUsers";
import AppActivity from "./appActivity";
import DubleLinechart from "./dubleLinechart";
function Overview() {
  return (
    <>
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-2 md:mx-4 ">
        <div className=" rounded-lg border cursor-pointer">
          <DubleLinechart />
        </div>
        <div className=" rounded-lg border cursor-pointer">
          <AppActivity />
        </div>
        <div className=" rounded-lg border cursor-pointer">
          <BasicChart />
        </div>
        <div className="rounded-lg border cursor-pointer">
          {" "}
          <LineWithDataLabel />
        </div>
        <div className="rounded-lg border cursor-pointer">
          <MobileAppRevenue />
          <Platform />
        </div>
        <div className="rounded-lg border cursor-pointer">
          <MobileAppRevenue />
          <Retention />
        </div>
        <div className="rounded-lg border cursor-pointer">
          <MobileAppRevenue />
          <TotalAppUsers />
        </div>
      </div>
    </>
  );
}

export default Overview;
