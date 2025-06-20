"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import DatePicker from "react-datepicker";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function DubleLinechart() {

  const revenue = 6.7;
    // const percentageChange = 16;
  
    const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
    const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
  
   
  
  const [state] = useState<{
    series: ApexAxisChartSeries;
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Current Period",
        data: [95000, 110000, 170000, 150000, 90000, 130000, 150000],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        width:250,
        toolbar: {
          show: false,
        },
      },
      colors: ["#342AEF", "#B5BBD5"], // Blue and light gray
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      fill: {
        type: "solid",
        opacity: 0.15,
      },
       grid: {
    show: false,
    
  },
      xaxis: {
        categories: [
          "Apr 5",
          "Apr 6",
          "Apr 7",
          "Apr 8",
          "Apr 9",
          "Apr 10",
          "Apr 11",
        ],
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "18px",
            
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `$${(value / 1000).toFixed(0)}k`,
          style: {
            colors: "#6b7280",
            fontSize: "16px",
          },
        },
      },
      legend: {
        show:false,
      },
    },
  });

  return (
    <>
     <div className="p-3">
          <div className="flex justify-between items-center ">
            <h2 className="text-md font-semibold text-gray-800">Opp App Rate</h2>
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
    
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-900">
              ${revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
        <div className="flex items-center font-semibold text-red-500 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </div>
    
        
        </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </>
  );
}

export default DubleLinechart;
