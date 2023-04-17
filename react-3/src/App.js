import React from 'react'
import Registration from './Hooks/Registration'
import Message from './Hooks/Message'

import Zoom from './Hooks/Zoom'
const App = () => {
    return <div>
        <nav className='navbar navbar-dark bg-dark'>
            <a href="#" className='navbar-brand'>React Hooks</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><a className='nav-link' href="#">Hooks Example</a></li>
                </ul>
            </div>
        </nav>
        {/*   <Registration /> */}
        <hr />
        {/*  <Zoom /> */}
        <Message />
    </div>
}

export default App