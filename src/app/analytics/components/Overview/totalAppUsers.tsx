'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import DatePicker from 'react-datepicker';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function TotalAppUsers() {
  const iOSUsers = 1055000;
  const androidUsers = 329000;
  const totalUsers = iOSUsers + androidUsers;

  const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));

  const [chartState] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [iOSUsers, androidUsers],
    options: {
      chart: {
        type: 'donut',
        height: 280,
        toolbar: { show: false },
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
      stroke: { show: false },
      grid: {
        padding: { top: 0, bottom: 0, left: 0, right: 0 },
      },
    },
  });

  return (
    <>
      {/* Top Heading and Date Range */}
      <div className="p-4">
        <div className="flex justify-between items-center">
                                <h2 className="text-md font-semibold text-gray-800">Total App Users</h2>
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

      {/* Donut Chart with Total Users in Center */}
      <div className="relative flex justify-center items-center h-[280px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl font-bold text-gray-900">
            {totalUsers.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center justify-center w-full border-b">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="donut"
          height={280}
          width={280}
        /></div>
      </div>

      {/* Divider Line */}

      {/* Bottom Custom Legend */}
      <div className="flex items-center justify-start gap-6 px-4 p-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#342AEF]"></div>
          <span>iOS users:{(iOSUsers / 1000).toFixed(0)}k</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#B5BBD5]"></div>
          <span>Android users: {(androidUsers / 1000).toFixed(0)}k</span>
        </div>
      </div>
    </>
  );
}

export default TotalAppUsers;
