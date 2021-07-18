import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <button onClick={() => this.setState({ count: this.state.count + 1 })}> {this.state.count}</button>
        )
    }
}

export default Button