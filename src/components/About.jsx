import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Define the animation variants
  const containerVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2, // Slight delay for smooth appearance
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants} 
      initial="initial"
      animate="animate"
      className="border-b border-neutral-900 pb-4"
    >
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex justify-center">
        <div className="max-w-3xl text-center">
          <motion.p variants={textVariants}>
            Hi, I'm Rifat, a dedicated full-stack developer with expertise in
            crafting seamless web applications. On the frontend, I specialize
            in React to create dynamic, responsive user interfaces. For backend
            development, I leverage Python frameworks and Express.js to build
            robust and scalable server-side applications. Whether it's
            designing intuitive user experiences or implementing efficient
            backend systems, I thrive on solving complex problems and bringing
            ideas to life. Let's create impactful digital solutions together!
          </motion.p>
          <motion.p variants={textVariants}>
            When I’m not coding, I’m exploring innovative ideas and finding
            ways to make a positive impact through technology. Whether you’re
            looking to collaborate on a project or need someone to bring your
            ideas to life, I’m excited to help make it happen!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
