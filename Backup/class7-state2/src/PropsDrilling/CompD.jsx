import React, { Component } from 'react'

class CompD extends Component {
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>Component D</h1>
                <h2>Employee Name:{this.props.name}</h2>

            </div>
        )
    }
}

export default CompD
