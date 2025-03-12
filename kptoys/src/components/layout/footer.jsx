import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-16 items-center justify-center w-full bottom-0 max-w-screen overflow-hidden  bg-[#40180E] text-white ">
      <div className="w-full">
        {/* Brand Name */}
        <h2 className="text-xl text-left px-4 py-6 font-semibold ">
          Kondapalli Bommalu
        </h2>

        {/* Sitemap */}
        <divfoot className="flex justify-between flex-row items-end pb-6 ">
          <div>
            <h3 className="mt-4 text-sm font-medium px-4 text-left">
              Site map
            </h3>
            <ul className="mt-2 text-xs text-left px-4 space-y-1">
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
            <p>Designed by Hemanth Kapalavai</p>
          </div>
        </divfoot>
      </div>
    </footer>
  );
};

export default Footer;
