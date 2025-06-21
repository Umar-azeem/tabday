"use client";
import React, { forwardRef } from "react";

interface CustomDateInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomDateInput = forwardRef<HTMLButtonElement, CustomDateInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className="flex items-center justify-between bg-white px-3 py-[5px] border border-gray-200 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {value}
      </button>
    );
  }
);

CustomDateInput.displayName = "CustomDateInput";

export default CustomDateInput;
