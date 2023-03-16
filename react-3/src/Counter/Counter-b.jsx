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
            <button onClick={this.decrHandler}>-</button>
            {this.state.counter}
            <button onClick={this.incrHandler}>+</button>
        </div>
    }
}
export default Counter