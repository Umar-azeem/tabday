import Image from "next/image";
import React from "react";

// Headings (optional - shown directly in JSX)
const columns = [
  "Push Sent",
  "Sessions",
  "Sale",
  "Cart Adds",
  "Orders",
  "Conversion",
  "Date Sent",
];

// Table data
const data = [
  {
    id: 1,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
  {
    id: 2,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
  {
    id: 3,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
   {
    id: 4,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
   {
    id: 5,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
   {
    id: 6,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
   {
    id: 7,
    image1: "/assets/td.jpg",
    image2: "/assets/b1.png",
    head: "Looking for a  Cheeky dress?",
    name: "Unstitched - No 3342 Men's Cotton Shirt unstitched",
    sessions: "10250",
    sale: "$150.00",
    cart_adds: "450",
    orders: 516,
    conversion: 16,
    date_sent: "April 8, 2022",
  },
];

function TableOfPerformance() {
  return (
    <table className="min-w-full table-auto ">
      <thead className=" text-left text-lg font-semibold text-gray-700">
        <tr>
          {columns.map((col, i) => (
            <th key={i} className="p-2">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-t border-gray-200 text-gray-600 text-lg">
            <td className="p-4 flex justify-start items-center gap-4">
              <Image
                src={item.image1}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-md "
              />
              <div className="">
                <h1 className="font-semibold text-gray-900 text-sm">{item.head}</h1>
                <p className="text-sm text-gray-600">{item.name}</p>
              </div>

              <td className="p-4 ml-10 ">
                <Image
                  src={item.image2}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-md "
                />
              </td>
            </td>

            <td className="p-4 text-md">{item.sessions}</td>
            <td className="p-4">{item.sale}</td>
            <td className="p-4">{item.cart_adds}</td>
            <td className="p-4">{item.orders}</td>
            <td className="p-4">{item.conversion}%</td>
            <td className="p-4">{item.date_sent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableOfPerformance;
