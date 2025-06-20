'use client';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import { ApexOptions } from 'apexcharts';
import 'react-datepicker/dist/react-datepicker.css'; // 👈 Don't forget this

function AverageSessionLength() {
  const revenue = 7.3;
  // const percentageChange = 16;

  const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));

  const series = [
    {
      name: 'iOS',
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: 'Android',
      data: [76, 85, 101, 98, 87, 105, 91],
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    colors: ['#B5BBD5', '#342AEF'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '44%',
        borderRadius: 0,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent'],
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
        formatter: (value: number) => `${value}k`,
        style: { fontSize: '14px', colors: '#6B7280' },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}k`,
      },
    },
    fill: {
      opacity: 1,
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
    size: 12, // ✅ replaces width, height, radius
    strokeWidth: 1,
    shape: 'circle',
    offsetX: -5,
  },
    },
  };

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center ">
          <h2 className="text-md font-semibold text-gray-800">Average Session Length</h2>
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

        <div className="flex items-center ">
          <p className="text-2xl font-bold text-gray-900">
            ${revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <div className="flex items-center font-semibold text-[#02C07E] px-4">
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
            <span className="text-lg font-semibold"></span>
          </div>
        </div>
      </div>

      <div id="chart">
        <ReactApexChart options={chartOptions} series={series} type="bar" height={350} />
      </div>
    </>
  );
}

export default AverageSessionLength;
