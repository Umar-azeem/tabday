"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import DatePicker from "react-datepicker";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
function CoupleBarChart() {
  const revenue = 40243;
  const percentageChange = 10;

  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2025-04-05")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2025-04-11"));
  const options: ApexOptions = {
  


    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false }, // ✅ No menu icon
    },
    colors: ["#342AEF", "#B5BBD5"], // ✅ Direct & Push colors
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 0,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Apr 5 - Apr 11"], // ✅ One combined category
      labels: {
        style: { fontSize: "12px", colors: "#6B7280" },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${Math.round(value / 1000)}k`,
        style: { fontSize: "12px", colors: "#6B7280" },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${Math.round(val / 1000)}k`,
      },
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "left",
      fontSize: "14px",
      fontWeight: 500,
      labels: {
        colors: "#374151",
        useSeriesColors: false,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
      markers: {
    size: 12, // ✅ replaces width, height, radius
    strokeWidth: 1,
    shape: 'circle',
    offsetX: -5,
  },
    },
  };

  const series = [
    {
      name: "Direct",
      data: [200000],
    },
    {
      name: "Push",
      data: [160000],
    },
  ];

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center ">
          <h2 className="text-md font-semibold text-gray-800">
            Sessions By Platfrom
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

        <div className="flex items-center">
          <p className="text-2xl font-bold text-gray-900">
            $
            {revenue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <div className="flex items-center font-semibold text-[#02C07E] ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span className="text-lg font-semibold">{percentageChange}%</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-10 top-52 left-76 flex gap-16">
         <svg
  className="h-8 w-8 text-white fill-white"  // ✅ Tailwind classes to fill with white
  width="24"
  height="24"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
  fill="currentColor" // ✅ fills the path with white
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />
  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
</svg>
<svg
  className="h-8 w-8 text-white fill-white"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
  fill="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M16.35 3.87l1.8-1.8a.5.5 0 00-.71-.71l-1.89 1.89a7.937 7.937 0 00-6.1 0L7.56 1.36a.5.5 0 00-.71.71l1.8 1.8A7.96 7.96 0 004 11v5a1 1 0 001 1h1v2a1 1 0 002 0v-2h8v2a1 1 0 002 0v-2h1a1 1 0 001-1v-5a7.96 7.96 0 00-3.65-7.13zM8 10a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z" />
</svg>

        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={320}
        />
        
      </div>{" "}
    </>
  );
}

export default CoupleBarChart;
