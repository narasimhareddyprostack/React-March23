import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data })
            })
            .catch()
    }

    render() {
        console.log("second -render method")
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                {
                    this.state.users.length > 0 ? <>

                        {
                            this.state.users.map((user) => {
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            })
                        }
                    </> : null
                }
            </div>
        )
    }
}

export default User
