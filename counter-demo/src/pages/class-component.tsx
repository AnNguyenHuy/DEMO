import * as React from "react";

interface Props {}
interface State {
  count: number;
}

class CounterClassCom extends React.Component<Props, State> {
  state: State = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClassCom;
