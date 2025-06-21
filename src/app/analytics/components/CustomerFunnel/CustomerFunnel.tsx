"use client";
import React from "react";
import CustomerFunnelChart from "./customerFunnelChart";
import SelectDate from "./selectDate";
import MostSearchedProducts from "./mostSearchedProducts";
import MostView from "./MostView";
import MostWishListProduct from "./mostWIshlist";
import MostViewCollection from "./mostViewCollection";
import MostPurchasedProduct from "./mostPurchasedProduct";
function CustomerFunnel(){
  return (
    <>
      <SelectDate/>
      <div className="grid grid-cols-1 gap-4 mx-2 md:mx-4">
  <div className="rounded-lg border cursor-pointer">
    <CustomerFunnelChart />
  </div>
  <div className="rounded-lg border cursor-pointer">
    <MostSearchedProducts/>
  </div>
  <div className="rounded-lg border cursor-pointer">
    <MostView/>
  </div>
  <div className="rounded-lg border cursor-pointer">
    <MostWishListProduct/>
  </div>
  <div className="rounded-lg border cursor-pointer">
    <MostViewCollection/>
  </div>
  <div className="rounded-lg border cursor-pointer">
    <MostPurchasedProduct/>
  </div>
</div>

    </>
  );
}

export default CustomerFunnel;