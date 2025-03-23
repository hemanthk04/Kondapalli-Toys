import React from "react";

const About = () => {
  return (
    <section className="w-full py-8 px-2 mx-auto md:px-20 mt-8  flex flex-col md:flex-row items-center justify-between">
      {/* Text Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-xl font-bold text-[#5A2E14]">
          About Kondapalli Toys
        </h2>
        <p className="mt-4 text-md text-[#5A2E14] leading-relaxed">
          Kondapalli toys are traditional wooden toys handcrafted in Kondapalli,
          a town near Vijayawada, Andhra Pradesh. Made from Tella Poniki, a
          softwood found in the Kondapalli Hills, these toys are carved,
          assembled using a paste of tamarind seed powder and sawdust, and then
          painted with oil colors, watercolors, vegetable dyes, or enamel
          paints. Artisans create figures depicting mythology, animals, birds,
          bullock carts, rural life, and the famous Dasavataram and dancing
          dolls. Recognized as a Geographical Indication (GI) handicraft, these
          toys are crafted in Bommala Colony (Toys Colony), preserving a
          centuries-old tradition of artistry and storytelling.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="src/assets/aboutimage.png"
          alt="Kondapalli Toys"
          className="w-auto max-h-[400px] md:max-h-[300px] align-baseline h-auto rounded-sm"
        />
      </div>
    </section>
  );
};

export default About;
