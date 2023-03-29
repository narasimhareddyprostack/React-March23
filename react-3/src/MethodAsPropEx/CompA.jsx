import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {

    users = [101, 102, 103, 104]
    get_User_Details = (id) => {
        console.log(id)
    }
    render() {
        return (
            <div>CompA

                <hr />
                <CompB p1={this.users} m1={this.get_User_Details} />
            </div>

        )
    }
}

export default CompA