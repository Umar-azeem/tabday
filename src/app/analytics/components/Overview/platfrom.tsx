"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function CoupleBarChart() {
  const revenue = 40243;
  const percentageChange = 10;

  const [startDate, setStartDate] = useState<Date | null>(new Date("2025-04-05"));
  const [endDate, setEndDate] = useState<Date | null>(new Date("2025-04-11"));

  const options: ApexOptions = {
  chart: {
    type: "bar",
    height: 300,
    toolbar: { show: false },
  },
  colors: ["#342AEF", "#B5BBD5"], // Android, Apple
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "35%",
      borderRadius: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Apr 5 - Apr 11"],
    labels: {
      style: {
        fontSize: "12px",
        colors: "#6B7280",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => `${Math.round(value / 1000)}k`,
      style: {
        fontSize: "12px",
        colors: "#6B7280",
      },
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
      size: 8,
      strokeWidth: 1,
      shape: "circle",
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
    <div className="relative">
      {/* Title + Date Picker */}
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-800">Sessions By Platform</h2>
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

        <div className="flex items-center mt-2">
          <p className="text-2xl font-bold text-gray-900">
            ${revenue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <div className="flex items-center font-semibold text-[#02C07E] ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-lg font-semibold">{percentageChange}%</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div>
        <ReactApexChart options={options} series={series} type="bar" height={320} />
      </div>
    </div>
  );
}

export default CoupleBarChart;
