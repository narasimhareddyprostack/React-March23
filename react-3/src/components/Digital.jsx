import React from 'react'

class Digital extends React.Component {
    //ct = new Date().toLocaleTimeString();
    state = {
        ct: new Date().toLocaleTimeString()
    }
    componentDidMount() {
        console.log("second")
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, 1000)
    }
    componentWillUnmount() {
        console.log("Last-executing finally")
    }
    render() {
        console.log("First")
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Digital Clock</h3>
                        </div>
                        <div className="card-body">
                            <h4>{this.state.ct}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Digital