'use client';

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import DatePicker from 'react-datepicker';

const OrderByNewVsOld: React.FC = () => {
      const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
      const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
      const revenue = 9000;
  const percentageChange = 16;
  const [state] = useState<{
    series: ApexAxisChartSeries;
    options: ApexOptions;
  }>({
    series: [
        {
        name: 'Old',
        data: [48000, 50000, 40000, 65000, 25000, 40000,45876],
        color: '#B5BBD5',
      },
      {
        name: 'New',
        data: [44000, 55000, 41000, 67000, 22000, 43000,45200],
        color: '#342AEF',
      },
      
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      stroke: {
        width: 0,
        colors: ['#fff'],
      },
      dataLabels:
      { enabled: false },
     
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%', // 👈 Smaller value = thinner bar
        },
      },
      xaxis: {
              categories: ['Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11'],

      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        labels: {
          formatter: (val: number) => `${val / 1000}K`,
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
    size: 12, // ✅ replaces width, height, radius
    strokeWidth: 1,
    shape: 'circle',
    offsetX: -5,
  },
    },
    },
  });

  return (
    <>
          <div className="p-3">

        <div className="flex justify-between items-center ">
                  <h2 className="text-md font-semibold text-gray-800">Average Order Frequency Based On Platfrom</h2>
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
                <div className="flex items-center justify-between">
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
            <span className="text-lg font-semibold">{percentageChange}%</span>
          </div>
        </div>
      
      <div id="html-dist"></div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default OrderByNewVsOld;
