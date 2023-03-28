import React, { Component } from 'react'

class UserList extends Component {
  render() {
    return <div className="container">
      <h3>User List</h3>
      <div className="row">
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="col">
          <table className='table table-hover'>
            <thead className='bg-primary text-white'>
              <tr>
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {
                this.props.users.map((user) => {
                  return <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
}

export default UserList