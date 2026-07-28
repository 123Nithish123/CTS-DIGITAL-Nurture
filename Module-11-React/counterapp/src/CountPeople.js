import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  UpdateEntry() {
    this.setState({ entrycount: this.state.entrycount + 1 });
  }

  UpdateExit() {
    this.setState({ exitcount: this.state.exitcount + 1 });
  }

  render() {
    return (
      <div className="counter-container">
        <h1>Mall People Counter</h1>
        <p>People Entered: {this.state.entrycount}</p>
        <p>People Exited: {this.state.exitcount}</p>
        <div className="button-group">
          <button onClick={this.UpdateEntry}>Login</button>
          <button onClick={this.UpdateExit}>Exit</button>
        </div>
      </div>
    );
  }
}

export default CountPeople;