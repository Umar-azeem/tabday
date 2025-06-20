"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import CustomDateInput from "./customDateInput"; // or wherever it's located


function SelectDate() {
 const [startDate, setStartDate] = useState<Date | null>(new Date("2025-02-01T00:00:00"));
const [endDate, setEndDate] = useState<Date | null>(new Date("2025-02-14T00:00:00"));
 const handleDateChange = (dates: [Date | null, Date | null]) => {
  const [start, end] = dates;
  setStartDate(start);
  setEndDate(end);
};

  const formatDisplayDateRange = () => {
    if (startDate && endDate) {
      const startFormat = format(startDate, "MMM d");
      const endFormat = format(endDate, "MMM d, yyyy");
      return `${startFormat} - ${endFormat}`;
    }
    return "Select Date Range";
  };

  const formatComparisonDateRange = () => {
    if (startDate && endDate) {
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
      </section>
    </>
  );
}

export default SelectDate;
