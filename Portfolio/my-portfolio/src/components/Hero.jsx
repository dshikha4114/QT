import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
//       <motion.h1 className="text-5xl font-bold"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hi, I'm <span className="text-yellow-300">Your Name</span>
//       </motion.h1>
//       <p className="mt-4 text-lg">MERN Stack Developer | Web Enthusiast</p>
//     </section>
//   );
// };

// export default Hero;



import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-500 to-pink-500">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-yellow-300">Deepshikha Shrivastva</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        MERN Stack Developer | Web Enthusiast
      </motion.p>
    </section>
  );
};

export default Hero;
