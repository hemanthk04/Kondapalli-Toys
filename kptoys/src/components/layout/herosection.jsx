import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] mt-8 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/heroimage.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-4 transform -translate-y-24">
        <h1 className="text-5xl md:text-6xl  font-libre font-[700] text-[var(--primary-color)]">
          Kondapalli Bommalu
        </h1>
        <p className="text-lg md:text-sm font text-[var(--primary-color)] mt-6 font-[500]">
          GI Certified - Made in{" "}
          <a
            href="https://maps.app.goo.gl/8EH97CzigUy7Gtm38"
            target="_blank"
            className="underline underline-offset-3 decoration-[0.5px]"
          >
            Kondapalli, Andhra pradesh
          </a>
        </p>
        <button className="mt-6 px-6 py-3 bg-[var(--primary-color)] text-white font-medium text-xs cursor-pointer rounded-sm hover:scale-110 transition">
          Shop Now{" "}
          <ArrowRight className="w-4 h-4 inline-block" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
