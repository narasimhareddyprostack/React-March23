import React from 'react'

const Employee = (props) => {
    return (
        <div>
            <h3>Employee Component</h3>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    )
}

export default Employee
