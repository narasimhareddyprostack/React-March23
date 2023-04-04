import React, { useEffect } from 'react'

const Digital = () => {
    //let cry = new Date()
    let [ct, setCT] = React.useState(new Date().toLocaleTimeString())
    useEffect(() => {
        setInterval(() => {
            setCT(new Date().toLocaleTimeString())
        }, [1000])
    }, [])
    return (
        <div>
            Digital

            <h2>{JSON.stringify(ct)}</h2>
        </div>

    )
}

export default Digital