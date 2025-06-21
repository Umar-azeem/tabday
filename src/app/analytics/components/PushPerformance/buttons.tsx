"use client";
import React, { useState } from "react";

const Buttons = () => {
  const [active, setActive] = useState("Sessions");

  const buttons = ["Sessions", "Sales", "Cart adds", "Orders", "Conversion"];

  return (
    <div className="flex gap-4">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActive(btn)}
          className={` py-2 w-28 rounded text-sm font-medium transition ${
            active === btn
              ? "bg-[#3228f5] text-gray-100"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
