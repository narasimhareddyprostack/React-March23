import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Logo Section</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar
