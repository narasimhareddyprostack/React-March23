import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrAction, decrAction } from '../redux/counter/counter.action'
const Counter = () => {
    let dispatch = useDispatch()
    let counter = useSelector((state) => {
        return state.counter

    })
    return (
        <div>
            <p></p>
            <h1>Counter Value:{JSON.stringify(counter.counter)}</h1>
            <button onClick={() => { dispatch(decrAction()) }}>-</button>
            <button onClick={() => { dispatch(incrAction()) }}>+</button >
        </div >
    )
}

export default Counter