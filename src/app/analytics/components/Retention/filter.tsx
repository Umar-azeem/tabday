"use client";
import React, { useState } from "react"; // Import forwardRef here
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import CustomDateInput from "./CustomDateInput";

function Filter() {
 const [startDate, setStartDate] = useState<Date | null>(new Date("2025-02-01T00:00:00"));
 const [endDate, setEndDate] = useState<Date | null>(new Date("2025-02-14T00:00:00"));
  const handleDateChange = (dates: [Date | null, Date | null]) => {
   const [start, end] = dates;
   setStartDate(start);
   setEndDate(end);
 };
 

  // Formats the date range for the main button
  const formatDisplayDateRange = () => {
    if (startDate && endDate) {
      // e.g., "Feb 1 - Feb 14, 2025"
      const startFormat = format(startDate, "MMM d");
      const endFormat = format(endDate, "MMM d, yyyy");
      return `${startFormat} - ${endFormat}`;
    }
    return "Select Date Range";
  };

  // Formats the date range for the "Compared" text
  const formatComparisonDateRange = () => {
    if (startDate && endDate) {
      // e.g., "Feb 1, 2025 - Feb 14, 2025"
      return `${format(startDate, "MMM d, yyyy")} - ${format(
        endDate,
        "MMM d, yyyy"
      )}`;
    }
    return "";
  };

  return (
    <>
      <section className="p-4  bg-white">
        {/*  Header controls  */}
        <div className="flex flex-col justify-start items-start mb-1">
          {/* Container for the controls */}
          <div className="flex items-center space-x-2">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={handleDateChange}
              dateFormat="MMM d, yyyy"
              customInput={<CustomDateInput value={formatDisplayDateRange()} />}
            />

            <div className="relative">
              <select className="appearance-none bg-white block w-full pl-3 pr-8 py-[5px] border border-gray-200 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none">
                <option>Month</option>
                <option>Week</option>
                <option>Year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <div className="text-xs font-semibold text-gray-800  whitespace-nowrap">
              Compared {formatComparisonDateRange()}
            </div>
          </div>
        </div>
        {/* Metrics cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {/*  Total order */}
          <div className="p-3 flex justify-center flex-col gap-5 border rounded-lg">
            <div className="gap-4">
              <h2 className="text-sm font-bold text-[#5a5a5a] ">Total Order</h2>
            </div>
            <div className=" text-sm flex justify-between mt-1">
              <h2 className="text-lg font-bold">$264,697.36</h2>

              <p className="text-green-500 text-lg font-bold flex">
                <div className="flex items-center font-semibold text-green-500 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span className="text-lg font-semibold"></span>
                </div>
                11%
              </p>
            </div>
          </div>

          {/* Average order value  */}
          <div className="p-3 flex justify-center flex-col gap-5 border rounded-lg">
            <div className="gap-4">
              <h2 className="text-sm font-bold text-[#5a5a5a] ">
                Average Order Value
              </h2>
            </div>
            <div className=" text-sm flex justify-between mt-1">
              <h2 className="text-lg font-bold">1,306</h2>

              <p className="text-red-500 text-lg font-bold flex">
                <div className="flex items-center font-semibold text-red-500 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span className="text-lg font-semibold"></span>
                </div>
                11%
              </p>
            </div>
          </div>

          {/*  Repurchase Rate  */}
          <div className="p-3 flex justify-center flex-col gap-5 border rounded-lg">
            <div className="gap-4">
              <h2 className="text-sm font-bold text-[#5a5a5a]  ">
                Repurchase Rate
              </h2>
            </div>
            <div className=" text-sm flex justify-between mt-1">
              <p className="text-red-500 text-lg font-bold flex">
                <div className="flex items-center font-semibold text-red-500 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span className="text-lg font-semibold"></span>
                </div>
                11%
              </p>
            </div>
          </div>
          {/*  promo code purchase */}

          <div className="p-3 flex justify-center flex-col gap-5 border rounded-lg">
            <div className="gap-4">
              <h2 className="text-sm font-bold text-[#5a5a5a]  ">
                Promo Code Purchase
              </h2>
            </div>
            <div className=" text-sm flex justify-between mt-1">
              <p className="text-green-500 text-lg font-bold flex">
                <div className="flex items-center font-semibold text-green-500 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span className="text-lg font-semibold"></span>
                </div>
                39%
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filter;
