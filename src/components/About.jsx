import React from 'react';
import AboutPic from '../assets/about.webp'; 
import { ABOUT_TEXT } from '../constants'; 
import { motion } from "framer-motion";

function About() {
  return (
    <div className='border-b border-neutral-900 pb-12'>
      <h1 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className="flex items-center justify-center">
            <img 
              src={AboutPic} 
              alt="about picture" 
              className='rounded-lg shadow-xl' 
            />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className='w-full lg:w-1/2 px-4 lg:px-8'
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-6 text-lg font-light">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
