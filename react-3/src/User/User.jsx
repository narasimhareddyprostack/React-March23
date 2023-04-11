import React, { useEffect } from 'react'
import user_Action from '../redux/user/user.action'
import { useDispatch } from 'react-redux'
const User = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(user_Action())
    }, []);
    return (
        <div>
            <h1>User Componenent</h1>
        </div>
    )
}

export default User