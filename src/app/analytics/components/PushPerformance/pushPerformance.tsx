"use client";
import React from "react";
import SelectDate from "../CustomerFunnel/selectDate";
import TotalPushPerfromance from "./totalPushPerfromance";
import IndividualPushPerformance from "./individualPushPerformance";

function PushPerformance(){
  return (
    <>
      <SelectDate/>
  <div className="grid grid-cols-1 gap-4 mx-2 md:mx-4">
  <div className="rounded-lg border cursor-pointer">
    <TotalPushPerfromance/>
  </div>
  <div className="rounded-lg border cursor-pointer">
      <IndividualPushPerformance/>
  </div>
</div>

    </>
  );
}
export default PushPerformance