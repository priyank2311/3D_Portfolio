import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h6 className={styles.sectionHead}>
      Skills & Endorsements
      </h6>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");