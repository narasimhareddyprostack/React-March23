import React, { Component } from 'react'
import UserDetails from './UserDetails'
import Axios from 'axios'
import UserList from './UserList'
class UserApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            sel_User: {}
        }
    }
    selected_User = (user) => {
        console.log("invoking from user List")
        console.log(user)
        this.setState({ sel_User: user })
    }
    componentDidMount() {
        Axios.get('https://dummyjson.com/users')
            .then((resp) => {
                this.setState({ user: resp.data })
            })
            .catch()
    }
    render() {
        return <div className="container">
            <h3>User App</h3>
            <div className="row">
                {/*        <pre>{JSON.stringify(this.state.sel_User)}</pre> */}
                <div className="col-md-8">
                    {
                        Object.keys(this.state.user).length > 0 ? <>
                            <UserList users={this.state.user.users} sel_User_Method={this.selected_User} /></> : null
                    }

                </div>
                <div className="col-md-4">
                    {
                        Object.keys(this.state.sel_User).length > 0 ? <>
                            <UserDetails user={this.state.sel_User} /></> : null
                    }
                </div>
            </div>
        </div>
    }
}

export default UserApp