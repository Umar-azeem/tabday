// File: components/Retention.tsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts to prevent SSR errors
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Retention() {
  // Data + Options for pie chart
  const [chartData, setChartData] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    // These values represent the two sections of the pie chart.
    // Based on the image, "Returning Session" is the larger part.
    series: [75, 25],
    options: {
      chart: {
        type: 'pie' as const,
        width: 300,
        height: 300,
        // Disabling the toolbar which includes the menu icon
        toolbar: {
          show: false,
        },
      },
      // Setting the specific colors from your request
      colors: ['#342AEF', '#B5BBD5'],
      // Updating labels to match the image
      labels: ['Returning Session', 'New Session'],
      // Hiding the default data labels that show on the pie slices
      dataLabels: {
        enabled: false,
      },
      // Configuring the legend to be hidden, as we will create a custom one
      legend: {
        show: false,
      },
      // Remove extra padding around the chart
      grid: {
        padding: {
          top: 0,
          bottom: 20, // Add some padding at the bottom for the legend
          left: 0,
          right: 0,
        },
      },
    },
  });

  return (
    <div className=" p-4 bg-white">
      <div className="flex justify-center items-center">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={250} // Adjusted size for better layout
          height={250}
        />
      </div>
      {/* Custom Legend Section */}
      <div className="flex justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-[#342AEF] mr-2"></span>
          <span className="text-sm text-gray-600">Returning Session</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-[#B5BBD5] mr-2"></span>
          <span className="text-sm text-gray-600">New Session</span>
        </div>
      </div>
    </div>
  );
}

export default Retention;