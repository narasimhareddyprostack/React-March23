import React from 'react'
class Counter extends React.Component {
    state = { counter: 1 }

    incrHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrHandler = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <i className="fa fa-minus-circle" onClick={this.decrHandler}></i>
            {this.state.counter}
            <i className="fa fa-plus-circle" onClick={this.incrHandler}></i>
        </div>
    }
}
export default Counter