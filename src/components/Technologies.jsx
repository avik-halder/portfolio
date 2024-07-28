import React from 'react';
import { motion } from 'framer-motion';

import python from "../assets/python.png";
import java from "../assets/java.png";

import { SiMysql, SiFastapi, SiTailwindcss, SiBootstrap, SiReact, SiNodedotjs, SiPython, SiC, SiCplusplus, SiJavascript } from 'react-icons/si';

const iconVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: [0, -5, 5, -5, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay: i * 0.4,
      },
    }),
  };

const Technologies = () => {
  const technologies = [
    { icon: <SiReact className='text-5xl text-cyan-400' />, key: "SiReact" },
    { icon: <SiNodedotjs className='text-5xl text-green-400' />, key: "SiNodedotjs" },
    { icon: <SiFastapi className='text-5xl' style={{ color: "#05998B" }} />, key: "SiFastapi" },
    { icon: <SiMysql className='text-5xl text-blue-400' />, key: "SiMysql" },
    { icon: <SiTailwindcss className='text-5xl' style={{ color: '#18b8b9' }} />, key: "SiTailwindcss" },
    { icon: <SiBootstrap className='text-5xl text-purple-400' />, key: "SiBootstrap" },
    { icon: <img src={python} alt="python" className='w-12 h-12' />, key: "python" },
    { icon: <SiJavascript className='text-5xl text-yellow-400' />, key: "SiJavascript" },
    { icon: <SiC className='text-5xl' />, key: "SiC" },
    { icon: <SiCplusplus className='text-5xl' style={{ color: "#00599C" }} />, key: "SiCplusplus" },
    { icon: <img src={java} alt="java" className='w-12 h-12' />, key: "java" },
  ];

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">
        Expertises
        </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4"
    >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.key}
            custom={index}
            variants={iconVariants}
            initial='initial'
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
