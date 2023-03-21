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

        this.setState({ email: "rajni@gmail.com" })
    }
    render() {
        return (
            <React.Fragment>
                <h2>Login Details</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <form>
                    <div>
                        <label >Email Id:::</label>
                        <input type="text" onChange={this.emailHandler} />
                    </div>
                    <div>
                        <label >Password</label>
                        <input type="text" />
                    </div>
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default Login
