import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    emailHandler = (event) => {
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        //send user object to backup
    }
    render() {
        return (
            <React.Fragment>
                <h2>Login Details</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label >Email Id:::</label>
                        <input type="text" onChange={this.emailHandler} />
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="text" onChange={this.passwordHandler} />
                    </div>
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default Login
