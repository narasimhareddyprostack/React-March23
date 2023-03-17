import React, { Component } from 'react'
import CompC from './CompC'
class CompB extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <CompC name={this.props.name} />
            </div>
        )
    }
}

export default CompB