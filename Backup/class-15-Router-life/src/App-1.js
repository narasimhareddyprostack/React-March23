import React from 'react'
import Home from './components/Home'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router> <nav>
                <Link>Logo</Link>
                <div>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>

        </React.Fragment>
    }
}

export default App