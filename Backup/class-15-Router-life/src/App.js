import React from 'react'
import Home from './components/Home'
import About from './components/About'

import Digital from './components/Digital'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends React.Component {
    
    render() {
        return <React.Fragment>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="#" className='navbar-brand'>Logo</Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'><Link className='nav-link' to="digital">Digital</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="home">Home</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="about">About</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="services">Services</Link></li>
                            <li className='nav-list'><Link className='nav-link' to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/digital" element={<Digital />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>

        </React.Fragment>
    }
}

export default App