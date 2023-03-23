import React from 'react'

class Digital extends React.Component {
    //ct = new Date().toLocaleTimeString();
    state = {
        ct: new Date().toLocaleTimeString()
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, 1000)
    }
    render() {
        return <div>
            <h1>Digital Clock</h1>
            <pre>{JSON.stringify(this.state.ct)}</pre>
            <h1>{this.state.ct}</h1>
        </div>
    }
}
export default Digital