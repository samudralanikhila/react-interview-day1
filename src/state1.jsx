
import React from 'react';


class StateOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inital: "samudrala",
      names: " "
    };
  }
  changename = () => {
    this.setState({ names: "nikhila parathi" });
  }

  render() {
    return (
      <div>
        <h1>use state</h1>
        <h3>My name is {this.state.inital} {this.state.names}</h3>

        <button
          type="button"
          onClick={this.changename}
        >Name</button>
      </div>
    );
  }
}
export default StateOne