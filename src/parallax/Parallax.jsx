import React, { useRef } from 'react'
import "./parallax.css"
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className='parallax' ref={ref}>
        <motion.h1 style={{y: yBg}}>What we do</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallax