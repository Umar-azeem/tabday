"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import DatePicker from "react-datepicker";

// Prevent SSR issue in Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// ✅ External Heatmap Configuration
export const heatmapConfig = {
  plotOptions: {
    heatmap: {
      chart: {
        type: "heatmap",
        height: 300,
        radius: 10,
        enableShades: false,
        shadeIntensity: 0,
        useFillColorAsStroke: true,
        distributed: false,
        columnWidth: "60%",
        rowHeight: "60%",
        toolbar: { show: true },
        offsetX: 30,
        offsetY: 30,
        grid: {
  padding: {
    top: 40,
    bottom: 40,
    left: 40,
    right: 20,
  },
},

      },
      enableShades: false,
      colorScale: {
        ranges: [
          { from: 0, to: 25, color: "#EDECFE", name: "Low" },
          { from: 26, to: 35, color: "#A5A0F8", name: "Moderate" },
          { from: 36, to: 50, color: "#7771F4", name: "Very Moderate" },
          { from: 51, to: 60, color: "#4A41F1", name: "Average High" },
          { from: 61, to: 75, color: "#342AEF", name: "High" },
          { from: 76, to: 88, color: "#110B8E", name: "Very High" },
          { from: 89, to: 100, color: "#06042F", name: "Very Very High" },
        ],
      },
    },
  },
};
const revenue = 8938;
const percentageChange = 36.4;

function generateData(count: number, yrange: { min: number; max: number }) {
  const series = [];
  for (let i = 0; i < count; i++) {
    const x = `${i + 3}am`;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
  }
  return series;
}

function AppActivity() {
  const [state] = useState<{
    series: ApexAxisChartSeries;
    options: ApexOptions;
  }>({
    series: [
      { name: "April 1", data: generateData(18, { min: 0, max: 100 }) },
      { name: "April 2", data: generateData(18, { min: 0, max: 90 }) },
      { name: "April 3", data: generateData(18, { min: 0, max: 90 }) },
      { name: "April 4", data: generateData(18, { min: 0, max: 90 }) },
      { name: "April 5", data: generateData(18, { min: 0, max: 90 }) },
      { name: "April 6", data: generateData(18, { min: 0, max: 90 }) },
      { name: "April 7", data: generateData(18, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        type: "heatmap",
        height: 300,
        toolbar: {
          show: false, 
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        itemMargin: {
          horizontal: 2,
          vertical: 5,
        }, 
      },
      ...heatmapConfig, 
    },
  });
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2025-04-05")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2025-04-11"));

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center ">
          <h2 className="text-md font-semibold text-gray-800">App Activity</h2>
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

      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="heatmap"
          height={285}
        />
      </div>

      {/* ✅ Custom color scale */}
      <div className="flex flex-row gap-1 text-xs text-gray-600 cursor-pointer">
        <div className="flex flex-row p-4 gap-1">
          <span>Low</span>
          {heatmapConfig.plotOptions.heatmap.colorScale.ranges.map(
            (range, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: range.color }}
                ></div>
              </div>
            )
          )}
          <span>High</span>
        </div>
      </div>

      
    </>
  );
}

export default AppActivity;
