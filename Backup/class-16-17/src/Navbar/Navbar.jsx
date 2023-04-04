import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link className='navbar-brand' to="#">User App - all</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link className='nav-link' to="index">Home</Link></li>
                    <li className='nav-list'><Link className='nav-link' to="user">User</Link></li>
                    <li className='nav-list'><Link className='nav-link' to="method">Methodas Props</Link></li>
                    <li className='nav-list'><Link className='nav-link' to="useStateEx">Message - useState</Link></li>
                    <li className='nav-list'><Link className='nav-link' to="cartEx">Cart - useState</Link></li>
                    <li className='nav-list'><Link className='nav-link' to="digital">Digital Comp </Link></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar