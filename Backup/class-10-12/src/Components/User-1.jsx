import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    state = {
        users: []
    }
    get_Data_Handler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then()
            .catch()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default User
