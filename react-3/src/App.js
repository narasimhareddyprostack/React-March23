import React from 'react'
import Product from './Product/Product'
import Hero from './Hero/Hero'
import Navar from './Navbar/Navbar'
class App extends React.Component {
    render() {
        return <div>
            <Navar />
            <hr />
            <Hero />
        </div>
    }
}

export default App