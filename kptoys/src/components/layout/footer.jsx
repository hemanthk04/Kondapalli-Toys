import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col  items-center justify-center w-full bottom-0 max-w-screen overflow-hidden  bg-[#40180E] text-white ">
      <div className="w-full">
        {/* Brand Name */}
        <div className="px-8 py-6">
          <h2 className="text-xl text-left   font-semibold ">
            Kondapalli Bommalu
          </h2>
          <p className="text-xs">By Governament of Andhra pradesh</p>
        </div>






        {/* Sitemap */}
        <divfoot className="flex justify-between flex-row items-end pb-6 ">
          <div>
            <h3 className="mt-4 text-sm font-medium px-8 text-left">
              Site map
            </h3>
            <ul className="mt-2 text-xs text-left px-8 space-y-1">
              <li>Home</li>
              <li>
                Maps &gt; How to Reach | Map to Kondapalli | Popular Nearby
              </li>
              <li>About &gt; Contact Information | Privacy Policy</li>
              <li>Shop &gt; Shop Search | Support | Products</li>
            </ul>
          </div>

          {/* Copyright and Credit */}
          <div className="mt-6 space-y-1 pr-4 text-xs text-right ">
            <p>© All rights reserved</p>
            <p>Designed and Developed by Hemanth Kapalavai with ❤</p>
          </div>
        </divfoot>
      </div>
    </footer>
  );
};

export default Footer;
