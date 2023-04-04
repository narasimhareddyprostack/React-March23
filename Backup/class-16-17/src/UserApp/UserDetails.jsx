import React, { Component } from 'react'

export class UserDetails extends Component {
    render() {
        return (
            <div>
                {/*       <pre>{JSON.stringify(this.props.user)}</pre> */}
                <div className="card">
                    <div className="card-header">
                        <img src={this.props.user.image} width="100px" />
                    </div>
                    <div className="card-body">
                        <ul className='list-group'>
                            <li className='list-group-item'>{this.props.user.id} </li>
                            <li className='list-group-item'>{this.props.user.firstName} </li>
                            <li className='list-group-item'>{this.props.user.email} </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails