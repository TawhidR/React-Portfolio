import React from "react";
import Data from "/src/data/index.json";
import { motion } from "framer-motion";

const Expertise = () => {
  // Define the grid container animation variant
  const gridVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Define the card animation variant
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1, // Stagger the animation for each card
      },
    }),
  };

  return (
    <motion.div
      variants={gridVariants}
      initial="initial"
      animate="animate"
      className="border-b border-neutral-900 pb-12"
    >
      <h2 className="my-20 text-center text-4xl">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {Data?.skills?.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index} // Passing the index to control delay
            className="skills--section--card w-full max-w-lg rounded-lg shadow-md p-6 bg-neutral-800 text-neutral-300"
          >
            <div className="skills--section--img flex justify-center mb-4">
              <img
                src={item.src}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
            <div className="skills--section--card--content text-center">
              <h3 className="skills--section--title text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="skills--section--description text-neutral-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Expertise;
