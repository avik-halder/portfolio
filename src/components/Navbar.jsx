import React from 'react'
import {motion} from "framer-motion"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaFileDownload} from "react-icons/fa"
import resume from "/Avik_Halder.pdf"

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

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      className='flex items-center justify-between py-6'
    >
        <motion.div 
        variants={iconVariants}
        initial='initial'
        animate='animate'
        className="flex flex-shrink-0 items-center mt-3">
            <a 
            href={resume}
            download={resume}
            className="border-2 border-purple-300 text-purple-300 px-2 lg:px-3 py-2 lg:py-3 rounded-lg bg-transparent">
                <FaFileDownload className='text-2xl'/>
            </a>
        </motion.div>
        <div className='m-4 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/avik-halder-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-white w-6 h-6' />
        </a>
        <a href="https://github.com/avik-halder" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-white w-6 h-6' />
        </a>
        <a href="https://www.facebook.com/ah.bd.0" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='text-white w-6 h-6' />
        </a>
        <a href="https://www.instagram.com/avik_the_ambivert_?igsh=eXE3MWIrcXJjNTkw" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-white w-6 h-6' />
        </a>
        </div>
    </motion.nav>


  )
}

export default Navbar