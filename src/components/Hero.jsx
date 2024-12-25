import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Tawhid Rifat
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-400 via-slate-500 to-cyan-400 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6 tracking-tight text-neutral-300"
            >
              I specialize in crafting engaging and intuitive web applications.
              From responsive front-end designs to robust back-end solutions, I
              bring ideas to life with cutting-edge technologies. Let's
              collaborate and build something extraordinary!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="file (1).png"
              alt="Tawhid Rifat"
              className="h-auto w-full max-w-xs rounded-full border-4 border-neutral-900 lg:max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
