import React, { Component } from 'react'

class Message extends Component {
    state = { message: "Hello" }
    updateHandler = (value) => {
        this.setState({ message: value })
        //this.setState({ message: "Good Morning" })
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>{this.state.message}</h3>
                <button onClick={this.updateHandler.bind(this, "Good Morning")}>GM</button>
                <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
                <button onClick={this.updateHandler.bind(this, "Good Evening")}>GE</button>
                <button onClick={this.updateHandler.bind(this, "Good Night Sweeth Dreems")}>GN</button>
            </div>
        )
    }
}

export default Message
