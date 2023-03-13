import React from 'react'
class Employee extends React.Component {

    render() {
        return <div>
            <h3>Employee Component</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Name:{this.props.ename}</h3>
            <h3>Loc:{this.props.eloc[2]}</h3>
        </div>
    }
}
export default Employee