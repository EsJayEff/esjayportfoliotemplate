"use client";

import React from "react";
// motion for animations
import { motion } from "framer-motion";
// variant for framer motion
import { fadeIn } from "../utils/variants";
//images
import Image from "next/image";
import Port1 from "../../../public/portfolio-img1.png";
import Port2 from "../../../public/portfolio-img2.png";
import Port3 from "../../../public/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                eveniet error! Enim sed, animi ducimus aliquam, aut rerum ipsa
                odit error earum accusamus ratione nostrum ex eos. Est,
                exercitationem quod?
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src={Port1}
                alt="Porfolio1"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient z-10">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white z-10">Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10 justify-end">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src={Port2}
                alt="Porfolio1"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient z-10">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white z-10">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src={Port3}
                alt="Porfolio1"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
