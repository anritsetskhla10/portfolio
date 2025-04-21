import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className='border-b border-neutral-400 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-8 text-center text-4xl'
      >
        {t("Projects")}
      </motion.h2>

      <div className='flex flex-wrap'>
        {PROJECTS.map((project, index) => {
          const slug = project.title.toLowerCase().replace(/\s+/g, '-')
          return (
            <Link
              to={`/projects/${slug}`}
              key={index}
              className='w-full md:w-1/2 p-4'
            >
              <div className='flex flex-col md:flex-row items-start gap-6 rounded-lg p-4 transition hover:bg-neutral-800 h-full'>
                {/* Image from left */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className='w-full md:w-1/3 flex justify-center items-center'
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className='rounded'
                  />
                </motion.div>

                {/* Title and Technologies from right */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.8 }}
                  className='w-full md:w-2/3 flex flex-col justify-center'
                >
                  <h3 className='mb-2 text-lg font-semibold hover:text-purple-500'>
                    {project.title}
                  </h3>

                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-purple-800'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
