import React, { Component } from 'react'

class Message extends Component {
    state = { message: "Hello" }
    gmHandler = () => {
        this.setState({ message: "Good Morning" })
    }
    gaHandler = () => {
        this.setState({ message: "Good Afternoon" })
    }
    geHandler = () => {
        this.setState({ message: "Good Evening" })
    }
    gnHandler = () => {
        this.setState({ message: "Good Night" })
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>{this.state.message}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message
