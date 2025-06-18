'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function CoupleBarChart() {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: { show: false }, // ✅ No menu icon
    },
    colors: ['#342AEF', '#B5BBD5'], // ✅ Direct & Push colors
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 0,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Apr 5 - Apr 11'], // ✅ One combined category
      labels: {
        style: { fontSize: '12px', colors: '#6B7280' },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${Math.round(value / 1000)}k`,
        style: { fontSize: '12px', colors: '#6B7280' },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${Math.round(val / 1000)}k`,
      },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      markers: {
        width: 10,
        height: 10,
        radius: 12,
      },
      labels: {
        colors: '#374151',
      },
    },
  };

  const series = [
    {
      name: 'Direct',
      data: [200000],
    },
    {
      name: 'Push',
      data: [160000],
    },
  ];

  return (
    <div className="  bg-white p-4 shadow-sm ">
      

      <ReactApexChart options={options} series={series} type="bar" height={300} />
    </div>
  );
}

export default CoupleBarChart;
