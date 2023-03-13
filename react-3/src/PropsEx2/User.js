import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    name = "Rahul Gandhi"
    loc = ["Bangalore", "Chennai", "Tridendrum"]
    user = { user_Name: "Rahul Gandhi", sal: "No Salary" }
    render() {
        return <div>
            <h3>User Component</h3>
            <hr />
            <Employee ename={this.name} eloc={this.loc} />
        </div>
    }
}
export default User