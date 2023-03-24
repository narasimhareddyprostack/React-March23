import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
