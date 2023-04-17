import React, { useReducer } from 'react'

const Message = () => {
    let intialState = {
        msg: "Hello"
    }
    let userReducer = (state, action) => {
        console.log(action)
        switch (action) {
            case "GM":
                return { msg: "Good Morning" }
            case "GA":
                return { msg: "Good Afternoon" }
            case 'GN':
                return { msg: "Good Night" }
            default:
                return intialState
        }
    }
    let [state, dispatch] = useReducer(userReducer, intialState)
    return (
        <div className='container'>
            <pre>{JSON.stringify(state)}</pre>
            <div className="row">

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>useReducer Examle</h3>
                            <h4>Message:{state.msg}</h4>

                        </div>
                        <div className="card-body">
                            <button onClick={() => {
                                dispatch("GM")
                            }}>GM</button>
                            <button onClick={() => {
                                dispatch("GA")
                            }}>GA</button>
                            <button onClick={() => {
                                dispatch("GN")
                            }}>GN</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message