import { Component } from 'react';
import './index.css';

class Counter extends Component {
    state = { count: 0 };

    onIncrement = () => {
        this.setState((prevState) => {
            console.log(`prevState value: ${prevState.count}`);
            return { count: prevState.count + 1 };
        });
    };

    onDecrement = () => {
        this.setState((prevState) => {
            console.log(`prevState value: ${prevState.count}`);
            return { count: prevState.count - 1 };
        });
    };
    onReset = () => {
        this.setState((prevState) => {
            console.log(`prevState value: ${prevState.count}`);
            return { count: 0};
        });
    };

    render() {
        const { count } = this.state;

        return (
            <div className="container">
                <h1 className="heading">Counter Tool</h1>
                <p className="para">{count}</p>
                <div className="btncontainer">
                    <button className="increase" onClick={this.onIncrement}>Increase</button>
                    <button className="decrease" onClick={this.onDecrement}>Decrease</button>
                    <button className="reset" onClick={this.onReset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;
