import React from 'react'

const Message = () => {
    let [msg, setMsg] = React.useState("Hello")
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>useReducer Examle</h3>
                            <h4>Message:{msg}</h4>

                        </div>
                        <div className="card-body">
                            <button onClick={() => {
                                setMsg("Good Morning")
                            }}>GM</button>
                            <button onClick={() => {
                                setMsg("Good Afternoon")
                            }}>GA</button>
                            <button onClick={() => {
                                setMsg("Good Night")
                            }}>GN</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message