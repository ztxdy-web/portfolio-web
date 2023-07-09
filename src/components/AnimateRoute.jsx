import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import { AnimatePresence } from 'framer-motion';


function AnimateRoute() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoute
