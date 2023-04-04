import React from 'react'

const Message = () => {
    //let msg = "Hello"
    let [msg, setMsg] = React.useState("Hello")
    
    return (
        <div>
            <pre>{JSON.stringify(msg)}</pre>
            <button onClick={() => {
                setMsg("GMMMMMMM")
            }}>GM</button>
            <button>GN</button>
        </div>
    )
}

export default Message