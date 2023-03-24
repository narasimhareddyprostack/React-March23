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