import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
        super(props)
        console.log("First Const")
        this.state = { msg: "Hello" }
    }
    gmHandler = () => {
        console.log("if user clicks - ")
        this.setState({ msg: "Good Morning" })
    }
    componentDidMount() {
        console.log("third - life cycle method -automataicallly")
    }
    render() {
        console.log("second render method")
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h2>Message:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>

            </div>
        )
    }
}

export default Message
