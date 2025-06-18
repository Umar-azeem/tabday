// File: components/TotalAppUsers.tsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts to prevent SSR errors
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function TotalAppUsers() {
  const [chartState, setChartState] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    // Values for iOS (1055k) and Android (329k)
    series: [1055, 329],
    options: {
      chart: {
        type: 'donut',
        height: 280,
        // Remove the default menu icon
        toolbar: {
          show: false,
        },
      },
      // Set the specified colors
      colors: ['#342AEF', '#B5BBD5'],
      // Set the labels for the series
      labels: ['iOS users', 'Android users'],
      // Configure the plot options for the donut chart
      plotOptions: {
        pie: {
          donut: {
            size: '75%', // Adjust the thickness of the donut ring
            labels: {
              show: false, // We hide the default labels to create a custom one
            },
          },
        },
      },
      // Hide the default data labels on the slices
      dataLabels: {
        enabled: false,
      },
      // Hide the default legend, as we will create a custom one
      legend: {
        show: false,
      },
      // Remove extra padding around the chart
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
    },
  });

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-white">
      {/* Header Section */}
      

      {/* Chart Section with Centered Text */}
      <div className="relative flex justify-center items-center h-[280px]">
        {/* The Text in the middle of the donut */}
        <div className="absolute flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-gray-900">10,006,358</p>
        </div>
        {/* The Donut Chart */}
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="donut"
          height={280}
          width={280}
        />
      </div>

      {/* Separator Line */}
      <hr className="border-t border-gray-200 my-4" />

      {/* Custom Legend Section */}
      <div className="flex justify-center items-center space-x-6 text-sm">
        <div className="flex items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-[#342AEF] mr-2"></span>
          <span className="text-gray-500">iOS users:</span>
          <span className="font-semibold text-gray-800 ml-1">1055k</span>
        </div>
        <div className="flex items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-[#B5BBD5] mr-2"></span>
          <span className="text-gray-500">Android users:</span>
          <span className="font-semibold text-gray-800 ml-1">329k</span>
        </div>
      </div>
    </div>
  );
}

export default TotalAppUsers;