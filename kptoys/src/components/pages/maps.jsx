import React from "react";

const Maps = () => {
  return (
    <div className="flex flex-col items-center mt-8 py-12">
      {/* Embedded Google Map Example */}
      <div className="mt-6 w-full max-w-5xl flex flex-col items">
        <iframe
          className="w-full h-96 rounded-lg border border-gray-400/50"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.106859142883!2d80.53659457386793!3d16.621405324421914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ebe13b288cbf%3A0xf7e1c785fc523a08!2sBommala%20Colony%2C%2014-68%2C%20Killa%20Rd%2C%20Kondapalli%2C%20Andhra%20Pradesh%20521228!5e0!3m2!1sen!2sin!4v1741883937622!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="bg-white px-6 py-6 mt-8 border border-gray-400/50  rounded-lg">
          <h2 className="text-lg font-semibold "> How to Reach</h2>
          <p className="text-sm pt-2">
            Kondapalli is a charming town in Andhra Pradesh, just 20 km from
            Vijayawada and 262 km from Hyderabad. The nearest major railway
            station is Vijayawada Junction, 22 km away. If you're driving, use
            GPS to reach Kondapalli via NH65 and follow the signs from
            Ibrahimpatnam.
          </p>
        </div>

        <div className="flex gap-8">
          <div className="bg-white px-6 py-6 mt-4 mb-8 w-1/3 border border-gray-400/50 rounded-lg">
            <h2 className="text-lg font-semibold ">Popular places Nearby</h2>
            <ul className="list-disc mx-2 py-2 px-2 text-sm">
              <li className="">Kondapalli Fort</li>
              <li className="">Kondapalli Reserve Forest</li>
              <li className="">Bhavani Island</li>
              <li className="">Prakasam barrage</li>
              <li className="">Kanaka durga temple</li>
              <li className="">Undavalli Caves</li>
              <li className="">Mangalagiri Panakala swamy temple</li>
            </ul>
          </div>
          <div className="bg-white px-6 py-6 mt-4 mb-8 w-2/3 border border-gray-400/50 rounded-lg">
            <h2 className="text-lg font-semibold ">Geography</h2>
            <p className="text-sm pt-2 pr-2">
              Kondapalli, in Andhra Pradesh’s Krishna district, lies 20 km from
              Vijayawada and 262 km from Hyderabad. The nearest railway station
              is Vijayawada Junction, 22 km away. It is surrounded by the
              Eastern Ghats, with the Kondapalli Reserve Forest to the west.
              Rich in quartz deposits, the town has a rugged terrain, and its
              proximity to the Krishna River influences its climate,
              agriculture, and local industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
