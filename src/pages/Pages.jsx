import React from 'react'
import Home from './Home'
import {Route, Routes, useLocation} from 'react-router-dom';
import Cuisine from './Cuisine';
import Results from './Results';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}> 
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/results/:search' element={<Results/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default Pages