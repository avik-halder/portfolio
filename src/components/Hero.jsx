import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, LINES } from '../constants';
import { FaExchangeAlt } from 'react-icons/fa';

// import profilePic from "../assets/kevinRushProfile.png";
// import profilePic from "../assets/avik.png";
// import profilePic from "../assets/avik2.png";
import profilePic from '../assets/avik3.png';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % LINES.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='mt-20 w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'
            >
              Avik Halder
            </motion.h1>

            <div className='flex items-center flex-wrap'>
              <motion.span
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className="text-xl lg:text-3xl tracking-tight text-purple-200 font-light"
              >
                Computer geek kid
              </motion.span>

              <motion.div
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                className='mx-4'
              >
                <FaExchangeAlt className='text-xl lg:text-3xl' style={{ color: 'white' }} />
              </motion.div>

              <motion.div
                variants={container(0.5)}
                initial='hidden'
                animate='visible'
                mode='wait'
                className='flex-1 text-center'
              >
                <motion.span
                  key={index}
                  variants={textVariant}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-3xl tracking-tight text-transparent'
                >
                  {LINES[index]}
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tighter text-sm lg:text-base'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt='Avik Halder'
              width={500}
              height={500}
              className='mask-image my-5'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
