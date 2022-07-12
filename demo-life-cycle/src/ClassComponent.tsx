import React, { Component } from "react";

export class DemoClassComponent extends Component<{}, { color: string }> {
  constructor(props: any) {
    super(props);
    this.state = { color: "GREEN" };
  }
  componentWillMount() {
    console.log("componentWillMount run");
  }

  componentDidMount() {
    console.log("componentDidMount run");
    console.log(this.state);
  }

  changeColor() {
    this.setState({ color: "RED" });
    console.log("change color");
  }

  shouldComponentUpdate() {
    console.log("call when return true");
    return true;
  }
  componentDidUpdate() {
    console.log("component did update");
    console.log(this.state);
  }

  render() {
    console.log("render run");
    return (
      <div>
        <button onClick={this.changeColor}>CHANGE</button>
        <p>COLOR: {this.state.color}</p>
      </div>
    );
  }
}
