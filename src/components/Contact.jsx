import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="mb-10 text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4 flex items-center justify-center'
        >
          <FaMapMarkerAlt className='mr-2' />
          <a href="https://maps.app.goo.gl/QYfXk8Zmeo2XYk2s5" target="_blank" rel="noopener noreferrer" className='no-underline'>
            {CONTACT.address}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='my-4 flex items-center justify-center'
        >
          <FaPhoneAlt className='mr-2' />
          <a href={`tel:${CONTACT.phoneNo}`} className='border-b'>
            {CONTACT.phoneNo}
          </a>
        </motion.div>

        <div className='my-4 flex items-center justify-center'>
          <FaEnvelope className='mr-2' />
          <a href={`mailto:${CONTACT.email}`} className='border-b'>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
