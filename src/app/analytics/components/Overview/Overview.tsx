"use client";
// import BasicChart from "./basicChart";
const BasicChart = dynamic(() => import("./basicChart"), {
  ssr: false,
});
import React from "react";
import Filter from "./filter";
import LineWithDataLabel from "./lineWithDataLabel";
import Platform from "./platfrom";
import Retention from "./retention";
import TotalAppUsers from "./totalAppUsers";
import AppActivity from "./appActivity";
import DubleLinechart from "./dubleLinechart";
import dynamic from "next/dynamic";

const Overview = () => {
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
          <Platform />
        </div>
        <div className="rounded-lg border cursor-pointer">
          <Retention />
        </div>
        <div className="rounded-lg border cursor-pointer">
          <TotalAppUsers />
        </div>
      </div>
    </>
  );
};

export default Overview;
