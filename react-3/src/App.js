import React from 'react'
import Home from './components/Home'
import Navbar from './Navbar/Navbar'
import Contact from './components/Contact'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

let App = () => {
    return <div>
        <Router>

            <Navbar />
            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </div>
}
export default App
