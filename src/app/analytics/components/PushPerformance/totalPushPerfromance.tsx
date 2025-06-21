'use client';
import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import Buttons from './buttons';

function TotalPushPerfromance() {
  const revenue = 4000;
  const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
   const [state] = useState<{
     series: ApexAxisChartSeries;
     options: ApexOptions;
   }>({
     series: [
       {
         name: "Push Session",
         data: [95000, 110000, 170000, 150000, 90000, 130000, 150000],
       },
       {
         name: "Total Session",
         data: [30000, 50000, 40000, 70000, 50000, 30000, 100000],
       },
     ],
     options: {
       chart: {
         type: "area",
         height: 350,
         width:300,
         toolbar: {
           show: false,
         },
       },
       colors: ["#837BF4", "#342AEF"], // Blue and light gray
       dataLabels: {
         enabled: false,
       },
       stroke: {
         curve: "straight",
         width: 1,
       },
       fill: {
         type: "solid",
         opacity: 0.08,
       },
       grid: {
         show: true,
         borderColor: "#e5e7eb",
       },
       xaxis: {
         categories: [
           "Apr 5",
           "Apr 6",
           "Apr 7",
           "Apr 8",
           "Apr 9",
           "Apr 10",
           "Apr 11",
         ],
         labels: {
           style: {
             colors: "#6b7280",
             fontSize: "18px",
             
           },
         },
       },
       yaxis: {
         labels: {
           formatter: (value: number) => `${(value / 1000).toFixed(0)}`,
           style: {
             colors: "#6b7280",
             fontSize: "18px",
           },
         },
       },
       legend: {
  position: "bottom",
  horizontalAlign: "left",
  itemMargin: {
    horizontal: 10,
    vertical: 20, // ✅ adds space between items
  },
  markers: {
    size: 12, // ✅ replaces width, height, radius
    strokeWidth: 1,
    shape: 'circle',
    offsetX: -5,
  },
         labels: {
           colors: "#374151",
           useSeriesColors: false,
         },
       },
       tooltip: {
         y: {
           formatter: (val: number) => `$${val.toLocaleString()}`,
         },
       },
     },
   });

  return (
    <>
     <div className="p-3">
                    <div className="flex justify-between items-center ">
                      <h2 className="text-md font-semibold text-gray-800">Total Push Perfromance</h2>
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
                        {revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      
                    </div>
              <div className='mt-6 mx-1'><Buttons/></div>
                                     

                  </div>
         
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
    </>
  );
}

export default  TotalPushPerfromance