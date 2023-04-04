import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserApp from './UserApp/UserApp'
import CompA from './MethodAsPropEx/CompA'
import Message from './HooksEx/Message'
import Cart from './Cart/Cart'
import Digital from './LifeCycle/Digital'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={<UserApp />} />
                        <Route path="/method" element={<CompA />} />
                        <Route path="/useStateEx" element={<Message />} />
                        <Route path="/cartEx" element={<Cart />} />
                        <Route path="/digital" element={<Digital />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App