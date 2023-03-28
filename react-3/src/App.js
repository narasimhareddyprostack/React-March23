import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserApp from './UserApp/UserApp'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={<UserApp />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App