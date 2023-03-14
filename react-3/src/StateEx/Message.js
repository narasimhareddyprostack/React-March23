import React from 'react'
class Message extends React.Component {
    //msg = "Hello"
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "Good Morning" })
    }
    gnHandler = () => {
        this.setState({ msg: "Good Night" })
    }
    render() {
        console.log("render Method exeucting....")
        return <div>
            <h2>Message Component</h2>
            <h1>Message Value:{this.state.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message