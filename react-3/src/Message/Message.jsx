import React from 'react'
import { useDispatch } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action'
const Message = () => {

    let dispatch = useDispatch()
    let gmHandler = () => {
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <h1>Message Component</h1>
            <hr />

            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message