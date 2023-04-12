import React, { useEffect } from 'react'
import { user_Action } from '../redux/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
const User = () => {
    let dispatch = useDispatch()
    let user = useSelector((state) => {
        return state
    })
    useEffect(() => {
        dispatch(user_Action())
    }, []);
    return (
        <div>
            <h1>User Componenent</h1>
            <pre>{JSON.stringify(user)}</pre>
            <table border="2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>EmailID</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        Object.keys(user).length > 0 ?
                            <>
                                {
                                    user.users.map((user) => {
                                        return <tr>

                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </> : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User