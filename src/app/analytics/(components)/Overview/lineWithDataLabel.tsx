'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';
import DatePicker from 'react-datepicker';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function LineWithDataLabel() {
   const revenue = 40243;
      const percentageChange = 10;
    
      const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
      const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
    
     
  const [state] = useState<{
    series: ApexAxisChartSeries;
    options: ApexOptions;
  }>({
    series: [
      {
        name: 'Direct',
        data: [80_000, 100_000, 85_000, 150_000, 140_000, 180_000, 175_000],
      },
      {
        name: 'Push',
        data: [20_000, 50_000, 35_000, 110_000, 90_000, 160_000, 150_000],
      },
    ],
    options: {
      chart: {
        height: 360,
        type: 'line',
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      colors: ['#342AEF', '#B5BBD5'],
      dataLabels: { enabled: false },
      stroke: {
        
        curve: 'straight',
        width: 2,
      },
      markers: {
        size: 4,
      },
      grid: {
        show: true,
        borderColor: '#e5e7eb',
        strokeDashArray: 4,
      },
      xaxis: {
        categories: ['Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11'],
        labels: {
          style: { fontSize: '12px', colors: '#6B7280' },
        },
        axisTicks: { show: false },
        axisBorder: { color: '#e5e7eb' },
      },
      yaxis: {
        labels: {
          formatter: (value) => `${Math.round(value / 1000)}k`,
          style: { fontSize: '14px', colors: '#6B7280' },
        },
      },
      tooltip: {
        y: {
          formatter: (val) => `${Math.round(val / 1000)}k`,
        },
      },
      legend: {
  show: true,
  position: 'bottom',
  horizontalAlign: 'left',
  fontSize: '14px',
  fontWeight: 500,
  labels: {
    colors: '#374151',
    useSeriesColors: false,
  },
  itemMargin: {
    horizontal: 12,
    vertical: 15,
  },
  markers: {
    size: 8, // ✅ replaces width, height, radius
    strokeWidth: 1,
    shape: 'circle',
    offsetX: -5,
  },
}
    },
  });

  return (
    <>
        <div className="p-3">
                <div className="flex justify-between items-center ">
                  <h2 className="text-md font-semibold text-gray-800">New App Sessions</h2>
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
     
      <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
    </>
  );
}

export default LineWithDataLabel;
