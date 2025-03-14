import React from "react";


const History = () => {
  return (
    <section className="w-full py-8 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between">
      {/* Text Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-xl font-bold text-[#5A2E14]">
          About Kondapalli Toys
        </h2>
        <p className="mt-4 text-md text-[#5A2E14] leading-relaxed">
          The art of crafting Kondapalli toys is a 400-year-old tradition,
          passed down through generations of artisans known as Aryakhastriyas
          (Nakarshalu). These craftsmen are mentioned in the Brahmanda
          Purana and are believed to have migrated from Rajasthan to
          Kondapalli in the 16th century. They trace their lineage to
          Muktharishi, a sage said to have been blessed by Lord Shiva
          with exceptional skills in arts and crafts. Over centuries, this
          intricate woodcraft has flourished in Bommala Colony, Kondapalli,
          preserving its legacy through hand-carved wooden figurines that depict
          mythology, folklore, and rural life.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="src/assets/historyimage.png"
          alt="Kondapalli Toys"
          className="w-auto max-h-[300px] h-auto rounded-md shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default History;
