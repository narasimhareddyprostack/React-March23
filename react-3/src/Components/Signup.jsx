import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { userName: "", mobile: "", email: "" }
        }
    }
    updateHandler = (event) => {
        this.setState({ user: { ...this.state.user, [event.target.name]: event.target.value } })
    }
    submitHandler = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.state))
    }
    render() {
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state.user)}</pre>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Sign Up </h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler} >
                                <div className="form-group">
                                    <input className="form-control" name="userName" type="text" placeholder="User Name" onChange={this.updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" name="mobile" type="text" placeholder="Mobile" onChange={this.updateHandler} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" name="email" type="text" placeholder="Email ID" onChange={this.updateHandler} />
                                </div>
                                <input type="submit" value="Signup" className=" btn btn-success" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Signup
