import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandTypescript, TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";
import { VscAzure } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const CDN_ICONS = [
    { src: "https://reactnative.dev/img/header_logo.svg", alt: "React Native", duration: 2.5 },
    { src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", alt: "Figma", duration: 3 },
    { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Git", duration: 4 },
    { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "Firebase", duration: 5 },
    { src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", alt: "Next.js", duration: 2 },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js", duration: 3 },
    { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt: "Postman", duration: 1 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/1C_Company_logo.svg", alt: "1C", duration: 2.5 },
];

function Technologies() {
    const { t } = useTranslation();

    return (
        <div className='border-b border-neutral-800 py-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-8 text-center text-4xl'
            >
                {t('Technologies')}
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandTypescript className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandJavascript className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TiHtml5 className='text-7xl text-orange-400' />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaBootstrap className='text-7xl text-purple-600' />
                </motion.div>
                <motion.div variants={iconVariants(1)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <VscAzure className='text-7xl text-purple-600' />
                </motion.div>

                {CDN_ICONS.map(({ src, alt, duration }) => (
                    <motion.div
                        key={alt}
                        variants={iconVariants(duration)}
                        initial='initial'
                        animate='animate'
                        className='rounded-2xl border-4 border-neutral-800 p-4'
                    >
                        <img src={src} alt={alt} className="w-14 h-14" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
