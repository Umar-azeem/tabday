'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

function MobileAppRevenue() {
  const revenue = 264697.36;
  const percentageChange = 16;

  const [startDate, setStartDate] = useState<Date | null>(new Date('2025-04-05'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-04-11'));

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${format(startDate, 'MMM d, yyyy')} - ${format(endDate, 'MMM d, yyyy')}`;
    }
    return 'Select Date Range';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-md font-semibold text-gray-800">Mobile App Revenue</h2>
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
        <div className="flex items-center text-green-500 ml-4">
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

      {startDate && endDate && (
        <p className="text-xs text-gray-500 mt-2">Selected: {formatDateRange()}</p>
      )}
    </div>
  );
}

export default MobileAppRevenue;
