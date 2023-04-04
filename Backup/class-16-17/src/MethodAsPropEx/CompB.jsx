import React, { Component } from 'react'
class CompB extends Component {
    setValue = (id) => {
        this.props.m1(id)
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Component B</h2>
                <button onClick={this.setValue.bind(this, 101)}>Clicl - Id 101</button>
            </div>
        )
    }
}

export default CompB