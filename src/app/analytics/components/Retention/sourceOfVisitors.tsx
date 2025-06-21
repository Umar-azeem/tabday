"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ApexOptions } from "apexcharts";
import "react-datepicker/dist/react-datepicker.css";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function SourceOfVisitors() {
  const revenue = 630643;
  const percentageChange = 16;

  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2025-04-05")
  );
  const [endDate, setEndDate] = useState<Date | null>(
    new Date("2025-04-11")
  );

  const [state] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "pie",
      },
      dataLabels: { enabled: false },
      stroke: {
        show: false,
        width: 0,
        colors: ["transparent"],
      },
      labels: ["Direct", "Push", "Facebook", "Insta", "Email"],
      colors: ["#342AEF", "#B5BBD5", "#9747FF", "#8E88F6", "#1B7DB1"],
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
          horizontal: 12,
          vertical: 15,
        },
        markers: {
    size: 12, // ✅ replaces width, height, radius
    strokeWidth: 1,
    shape: 'circle',
    offsetX: -5,
  },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-semibold text-gray-800">
          Source Of Visitors
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

      <div className="flex items-center mb-4">
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

      <div
        id="chart"
        className="w-full flex justify-center items-center"
      >
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          height={370}
          width={725}
        />
      </div>
    </div>
  );
}

export default SourceOfVisitors;
