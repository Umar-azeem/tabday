// File: components/Retention.tsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import DatePicker from 'react-datepicker';

// Dynamically import ApexCharts to prevent SSR errors
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Retention() {
    const ReturningSession = 1055000;
  const NewSession = 329000;
  // const totalUsers = iOSUsers + androidUsers;
   const revenue = 30643;
        const percentageChange = 10;
      
        const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
        const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
  // Data + Options for pie chart
  const [chartData] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
  series: [ReturningSession, NewSession],
    options: {
      chart: {
        type: 'pie',
        height: 280,
        toolbar: { show: false },
         width: '100%',
  offsetX: 0,
  offsetY: 0,
  
      },
      colors: ['#342AEF', '#B5BBD5'],
      labels: ['iOS users', 'Android users'],
      legend: { show: false },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            labels: { show: false },
          },
        },
      },
       stroke: {
        width: 0,
        colors: ['#fff'],
      },
      grid: {
        padding: { top: 0, bottom: 0, left: 0, right: 0 },
      },
    },
});


  return (
    <>
    <div className="p-3">
                              <div className="flex justify-between items-center ">
                                <h2 className="text-md font-semibold text-gray-800">Retention</h2>
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
                                <div className="flex items-center font-semibold text-[#02C07E] ml-4">
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
                                  <span className="text-lg font-semibold">{percentageChange}%</span>
                                </div>
                              </div>
                        
                            
                            </div>
<div className="flex items-center justify-center w-full border-b">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={280} 
          height={280}
        />
         
      </div>
        <div className="flex items-center justify-start gap-6 px-4 p-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#342AEF]"></div>
          <span>Returning Session</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#B5BBD5] "></div>
          <span>New Session</span>
        </div>
      </div>
      {/* Custom Legend Section */}
     
    </>
  );
}

export default Retention;