"use client";

import React from "react";
// counter Up
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion for animations
import { motion } from "framer-motion";
// variant for framer motion
import { fadeIn } from "../utils/variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <div className="flex flex-col gap-y-10 lg:flex-row"> </div>
          {/* text */}
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelancer Front-end Develpoper with over 5 years of
              experience.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              nemo animi perferendis eveniet, quod blanditiis ab ullam hic
              suscipit rerum, cumque ipsa illum vero, perspiciatis modi dolor!
              A, deleniti quod.
            </p>
           {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={10} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={10} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={10} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div>
            </div>
            {/* Button and Profile link */}
            <div className="flex gap-x-8 items-center">
            <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
              <button className="btn btn-lg">Contact me </button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                {" "}
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
