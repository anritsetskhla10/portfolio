import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfilePic from '../assets/anri.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay }
  },
});

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Column */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center"
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              {t('hero.name')}
            </motion.h1>

            <motion.span
              className="bg-gradient-to-r from-pink-900 via-slate-700 to-purple-800  
              dark:bg-gradient-to-r dark:from-pink-300 dark:via-slate-500 dark:to-purple-500  
              bg-clip-text text-4xl text-transparent tracking-tight"
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              {t('hero.title')}
            </motion.span>

            <motion.p
            className="my-2 max-w-xl py-2 font-light tracking-tight"
            variants={container(1)}
            initial="hidden"
            animate="visible"
          >
            {t('hero.content.title')}
          </motion.p>
          <motion.p
            className="my-2 max-w-xl py-2 font-light tracking-tight"
            variants={container(1.1)}
            initial="hidden"
            animate="visible"
          >
            {t('hero.content.specialization')}
          </motion.p>
          <motion.p
            className="my-2 max-w-xl py-2 font-light tracking-tight"
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
          >
            {t('hero.content.experience')}
          </motion.p>
          <motion.p
            className="my-2 max-w-xl py-2 font-light tracking-tight"
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
          >
            {t('hero.content.focus')}
          </motion.p>
          <motion.p
            className="my-2 max-w-xl py-2 font-light tracking-tight"
            variants={container(1.4)}
            initial="hidden"
            animate="visible"
          >
            {t('hero.content.goal')}
          </motion.p>

          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={ProfilePic}
              alt="profile photo"
              className="w-40 h-40 lg:w-56 lg:h-56 rounded-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
