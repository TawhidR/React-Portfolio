import React from "react";
import Data from "/src/data/index.json";
import { motion } from "framer-motion";

const Projects = () => {
  // Variants for project cards
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-12">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {Data?.portfolio?.map((portfolio, index) => (
          <motion.a
            key={index}
            href={portfolio.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12"
            variants={cardVariants} // Apply the card animation variant
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
          >
            <div className="flex flex-wrap lg:flex-nowrap lg:items-center gap-6 lg:gap-8 rounded-md shadow-lg bg-neutral-800 p-4 transition-transform transform hover:scale-105">
              {/* Image Section */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <img
                  src={portfolio.src}
                  alt={portfolio.title}
                  className="rounded-md w-full max-w-sm object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/3">
                <h6 className="mb-4 text-xl font-semibold text-neutral-300">
                  {portfolio.title}
                </h6>
                <p className="text-neutral-400 leading-relaxed">
                  {portfolio.description}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
