import React from 'react'

class Message extends React.Component {
    msg = "Hello...."
    updateHandler() {
        console.log("Hello, updateHandler is invoking")
    }
    render() {
        return <div>
            <h2>Message Component</h2>

            <h3>Message Value:{this.msg}</h3>
            <button onClick={this.updateHandler()}>GM</button>
        </div>
    }
}
export default Message