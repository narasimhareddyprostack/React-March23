import React from 'react'

class CompB extends React.Component {

    render() {
        return <div>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Component B</h2>
            <h3>Hero:{this.props.hero_Name}</h3>
            <h3>Hero In:{this.props.hero_In}</h3>
        </div>
    }
}
export default CompB