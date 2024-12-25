import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Variants for the Contact section
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      <h2 className="my-10 text-center text-4xl">
        Get In Touch
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">
          Dhaka - 1340, Bangladesh
        </p>
        <p className="my-4">
          01964536649
        </p>
        <a className="border-b">
          roxdrifat49@gmail.com
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
