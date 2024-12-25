import React from "react";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => {
  return {
    initial: {
      y: -20,
    },
    animate: {
      y: [10, -10],
      transition: {
        y: {
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        },
      },
    },
  };
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(1)} // Faster duration for a subtle bounce
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJsBadge className="text-5xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)} // Slightly slower for a more noticeable effect
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiReact className="text-5xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)} // A slightly longer duration for a smooth bounce
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)} // Same duration as the first icon
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejsSmall className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.7)} // A slightly longer duration to create variety
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-5xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)} // Even slower for a calm visual effect
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)} // Longer duration to create a more pronounced effect
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)} // Longer duration, but still smooth
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase className="text-5xl text-white-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
