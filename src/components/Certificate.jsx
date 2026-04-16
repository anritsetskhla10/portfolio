
import {  motion } from "framer-motion"
import Azure from '../assets/certificate/azure.png'
import MicAzure from '../assets/certificate/microsoft-azure.png'
import Algouni from '../assets/certificate/certificate-algouni.jpg'
import unilab from '../assets/certificate/unilab-certification.png'
import Azure2026 from '../assets/certificate/azure2026.png'
import Pythonfun from '../assets/certificate/python-fun.png'
import PythonLogic from '../assets/certificate/python-logic.png'
import { useTranslation } from 'react-i18next'

function Certificate() {
    const { t } = useTranslation()
  return (
    <div className='border-b border-neutral-400 pb-4'>
    <motion.h2
     whileInView={{opacity: 1, y:0 }}
     initial={{opacity: 0, y: -100}}
     transition={{duration: 0.5}}
    className='my-8 text-center text-2xl md:text-4xl'>{t('Certificate')}</motion.h2>
    <div>
        <div className='mb-8 flex  flex-wrap lg:justify-between'>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={unilab}  alt="unilab" 
                    width={300} height={300} 
                    className='rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={Algouni}  alt="Algouni"
                    width={300} height={300}  
                    className='rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={Azure}  alt="Azure"
                    width={300} height={300}  
                    className='rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={MicAzure}  alt="azure"
                    width={300} height={300}  
                    className='rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={Azure2026}  alt="azure2026"
                    width={300} height={300}  
                    className='rounded'/>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={Pythonfun}  alt="pythonfun"
                    width={300} height={300}  
                    className='rounded'/>    
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className='w-1/2 lg:w-1/4'>
                <img src={PythonLogic}  alt="pythonlogic"
                    width={300} height={300}  
                    className='rounded'/>    
            </motion.div>
        </div>
    </div>
  </div>
  )
}

export default Certificate
