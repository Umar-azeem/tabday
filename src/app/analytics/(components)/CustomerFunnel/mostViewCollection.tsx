"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactApexChart from "react-apexcharts";
import DatePicker from "react-datepicker";
import { ApexOptions } from "apexcharts";
import "react-datepicker/dist/react-datepicker.css";

// ✅ Define the type for a product
interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  searches: string;
  change: number;
  isPositive: boolean;
  chartData: number[];
}

const products: Product[] = [
  {
    id: 1,
    image: "/assets/tailwind.png",
    name: "Men's Cotton Shirt unstitched - No 3342 Men's Cotton Shirt unstitched",
    price: "$150.00",
    searches: "15k",
    change: 16,
    isPositive: true,
    chartData: [10, 15, 14, 18, 16, 20],
  },
  {
    id: 2,
    image: "/assets/blu.png",
    name: "Men's Cotton Shirt unstitched - No 3342 Men's Cotton Shirt unstitched",
    price: "$150.00",
    searches: "12k",
    change: -5.6,
    isPositive: false,
    chartData: [20, 15, 12, 14, 10, 9],
  },
  {
    id: 3,
    image: "/assets/blu.png",
    name: "Men's Cotton Shirt unstitched - No 3342 Men's Cotton Shirt unstitched",
    price: "$150.00",
    searches: "12k",
    change: -5.6,
    isPositive: false,
    chartData: [20, 15, 12, 14, 10, 9],
  },
  {
    id: 4,
    image: "/assets/blu.png",
    name: "Men's Cotton Shirt unstitched - No 3342 Men's Cotton Shirt unstitched",
    price: "$150.00",
    searches: "12k",
    change: -5.6,
    isPositive: false,
    chartData: [20, 15, 12, 14, 10, 9],
  },
];

const SparklineChart = ({
  data,
  isPositive,
}: {
  data: number[];
  isPositive: boolean;
}) => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      opacity: 0.3,
      type: "solid",
    },
    colors: [isPositive ? "#16a34a" : "#ef4444"],
    tooltip: { enabled: false },
  };

  const series = [{ data }];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={30}
      width={60}
    />
  );
};

const ProductRow = ({ product }: { product: Product }) => (
  <div className="flex items-center justify-between py-4">
    {/* Product info */}
    <div className="flex items-center space-x-4 w-[60%]">
      <Image
        src={product.image}
        alt={product.name}
        width={48}
        height={48}
        className="rounded-md border"
      />
      <div>
        <p className="text-sm text-gray-500 line-clamp-1">{product.name}</p>
        <p className="text-xs text-gray-700 font-bold">{product.price}</p>
      </div>
    </div>

    {/* Search count */}
    <div className="text-sm text-gray-500 w-[15%] flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
        />
      </svg>
      {product.searches}
    </div>

    {/* Change % */}
    <div
      className={`w-[15%] text-md font-semibold ${
        product.isPositive ? "text-green-600" : "text-red-500"
      }`}
    >
      {product.isPositive ? "↑" : "↓"} {Math.abs(product.change)}%
    </div>

    {/* Sparkline */}
    <div className="w-[10%] flex justify-center">
      <SparklineChart
        data={product.chartData}
        isPositive={product.isPositive}
      />
    </div>
  </div>
);

const MostViewCollection = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2025-04-05")
  );
  const [endDate, setEndDate] = useState<Date | null>(
    new Date("2025-04-11")
  );

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-800">
            Most Viewed Collection
          </h2>
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

        <button className="text-sm px-4 py-1.5 mt-4 rounded-md text-gray-600 font-semibold bg-gray-200 hover:bg-gray-100">
          View all products
        </button>
      </div>

      <div>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostViewCollection;
