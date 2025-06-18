'use client';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DatePicker from 'react-datepicker';

function BasicChart() {
  const revenue = 30643;
  const percentageChange = 16;

  const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));
  const [state, setState] = useState({
    series: [
      {
        name: 'Direct',
        data: [44, 55, 57, 56, 61, 58, 63, ],
      },
      {
        name: 'Push',
        data: [76, 85, 101, 98, 87, 105, 91, ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: ['#B5BBD5','#342AEF'], // ✅ Only these 2 colors
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 0,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11',],
        labels: {
          style: { fontSize: '12px', colors: '#6B7280' },
        },
        axisTicks: { show: false },
        axisBorder: { color: '#e5e7eb' },
      },
    
      yaxis: {
  labels: {
    formatter: (value : any) => `${value}k`, 
    style: { fontSize: '14px', colors: '#6B7280' },
  },
},
tooltip: {

  y: {
    formatter: (val : any) => `${val}k`,
  },
},
customLegendItems : {
   legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        
        markers: {
          height: 50,
          radius: 12,
        },
        itemMargin: {
          horizontal: 6,
          vertical: 10,
        },
        labels: {
          colors: '#374151',
        },
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
    width: 120,
    height: 120,
    radius: 50, // Big round circle
    strokeColor: '#E5E7EB',
    strokeWidth: 1,
    shape: 'circle',
  },
}

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
}

export default BasicChart;
