import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import DatePicker from 'react-datepicker';
import { ApexOptions } from 'apexcharts'; // ✅ Import correct type
import 'react-datepicker/dist/react-datepicker.css';

dayjs.extend(quarterOfYear);

function CustomerFunnelChart() {
  const revenue = 30643;
  const percentageChange = 16;

  const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));

  const [state] = useState<{
    series: ApexAxisChartSeries;
    options: ApexOptions;
  }>({
    series: [
      {
        name: 'Sales',
        data: [
          { x: '2019/01/01', y: 400 },
          { x: '2019/04/01', y: 300 },
          { x: '2019/07/01', y: 200 },
          { x: '2019/10/01', y: 100 },
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 430,
        width: '150%',
      },
      colors: ['#342AEF'],
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusApplication: 'end',
          horizontal: false,
          columnWidth: '60%',
        },
      },
      xaxis: {
        categories: ['Session started', 'Product viewed', 'Add to card', 'Order created'],
        labels: {
          style: { fontSize: '16px', colors: '#6B7280' },
        },
        axisTicks: { show: false },
        axisBorder: { color: '#e5e7eb' },
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `${value}k`, // ✅ use number type
          style: { fontSize: '14px', colors: '#6B7280' },
        },
      },
      tooltip: {
        x: {
          formatter: (val: number | string) => {
  return `Q${dayjs(val).quarter()} ${dayjs(val).format('YYYY')}`;
},
        },
      },
    },
  });

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center ">
          <h2 className="text-md font-semibold text-gray-800">App Sessions</h2>
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

        <div className="flex items-center mt-4">
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

      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={380}
          width="100%"
        />
      </div>
    </>
  );
}

export default CustomerFunnelChart;
