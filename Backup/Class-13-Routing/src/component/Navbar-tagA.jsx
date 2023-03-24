import React from 'react'

const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="#" className="navbar-brand">Logo</a>
        <div className="ml-auto">
            <ul class="navbar-nav">
                <li className="nav-list"><a className="nav-link" href="./home">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="./about">About</a></li>
                <li className="nav-list"><a className="nav-link" href="./services">Services</a></li>
                <li className="nav-list"><a className="nav-link" href="./contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}

export default Navbar
