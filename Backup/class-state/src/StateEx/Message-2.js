import React from 'react'
class Message extends React.Component {
    msg = "Hello"
    gmHandler = () => {
        this.msg = "Hello,GM Rahul Gandhi"
        this.forceUpdate()
    }
    gnHandler = () => {
        this.msg = "GN Rahul Gandhi"
        this.forceUpdate()
    }
    render() {
        return <div>
            <h4>Message Component</h4>
            <h1>Message Value:{this.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message