import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandTypescript, TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss, SiPostgresql, SiMongodb, SiCsharp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";
import { VscAzure } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y:[ 10 , -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity, 
            repeatType: "reverse"
        }
    }
})

function Technologies() {
    const { t } = useTranslation();
  return (
    <div className='border-b border-neutral-800 py-24'>
        <motion.h2 
         whileInView={{opacity: 1, y:0 }}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
        className='my-8 text-center text-4xl'>{t('Technologies')}</motion.h2>
        <motion.div 
         whileInView={{opacity: 1, x:0 }}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(3)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandTypescript className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(5)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandJavascript className='text-7xl text-yellow-500'/>
            </motion.div>

            {/* New: PostgreSQL */}
            <motion.div 
             variants={iconVariants(3)}
             initial='initial'
             animate='animate'
             title="PostgreSQL"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostgresql className='text-7xl text-blue-500'/>
            </motion.div>

            {/* New: MongoDB */}
            <motion.div 
             variants={iconVariants(4)}
             initial='initial'
             animate='animate'
             title="MongoDB"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            {/* New: C# */}
            <motion.div 
             variants={iconVariants(2.5)}
             initial='initial'
             animate='animate'
             title="C#"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCsharp className='text-7xl text-purple-600'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(2)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TiHtml5 className='text-7xl text-orange-400'/>
            </motion.div>
            
            <motion.div 
             variants={iconVariants(6)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss  className='text-7xl text-cyan-600'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(4)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaBootstrap  className='text-7xl text-purple-600'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(1)}
             initial='initial'
             animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <VscAzure  className='text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <img 
                src="https://reactnative.dev/img/header_logo.svg" 
                alt="reactnative" 
                className="w-14 h-14" 
            />
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                    alt="nodejs" 
                    className="w-14 h-14" 
                />
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/1C_Company_logo.svg" 
                    alt="1C" 
                    className="w-14 h-14" 
                />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies