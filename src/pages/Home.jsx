import Dessert from "../components/Dessert";
import Random from "../components/Random";
import {motion} from 'framer-motion'


import React from 'react'

function Home() {
  return (
    <motion.div animate={{opacity: 1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
        <Random/>
        <Dessert/>
    </motion.div>
  )
}

export default Home