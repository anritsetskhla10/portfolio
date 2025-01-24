import React from 'react'
import {  motion } from "framer-motion"
import Azure from '../assets/certificate/azure.png'
import Algouni from '../assets/certificate/certificate-algouni.jpg'
import unilab from '../assets/certificate/unilab-certification.png'

function Certificate() {
  return (
    <div className='border-b border-neutral-400 pb-4'>
    <motion.h2
     whileInView={{opacity: 1, y:0 }}
     initial={{opacity: 0, y: -100}}
     transition={{duration: 0.5}}
    className='my-20 text-center text-4xl'>Certificate</motion.h2>
    <div>
        <div className='mb-8 flex  flex-wrap lg:justify-between'>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={unilab}  alt="unilab" 
                    width={300} height={300} 
                    className='mb-rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={Algouni}  alt="Algouni"
                    width={300} height={300}  
                    className='mb-rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={Azure}  alt="Azure"
                    width={300} height={300}  
                    className='mb-rounded'/>
            </motion.div>
        </div>
    </div>
  </div>
  )
}

export default Certificate
