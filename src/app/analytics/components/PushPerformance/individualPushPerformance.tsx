"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TableOfPerformance from "./tableOfPerformance";
const IndividualPushPerformance = () => {
        const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
        const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
  return (
    <div className="">
      <div className="p-3">
                                <div className="flex justify-between items-center ">
                                  <h2 className="text-md font-semibold text-gray-800">Individual Push Perfromance
</h2>
                                  <div className="text-sm px-3 py-1 rounded-full">
                                    <DatePicker
                                      selectsRange
                                      startDate={startDate}
                                      endDate={endDate}
                                      onChange={(dates) => {
                                        const [start, end] = dates as [Date, Date];
                                        setStartDate(start);
                                        setEndDate(end);
                                      }}
                                      dateFormat="MMM d, yyyy"
                                      className="px-4 py-2 border rounded-md cursor-pointer w-full"
                                      placeholderText="Select Date Range"
                                    />
                                  </div>

                              </div>
                              </div> 
      <div className="pt-4">
        <TableOfPerformance/>
      </div>
    </div>
  );
};

export default IndividualPushPerformance;
