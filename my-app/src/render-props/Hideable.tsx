import React, { Component } from 'react';

type Props = {
  defaultShow?: boolean;
};

type State = {
  show: boolean;
}

class Hideable extends Component<Props, State> {
  state: State = {
    show: this.props.defaultShow ?? true,
  }
  handleClick = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }
  render() {
    const { children } = this.props;
    const { show } = this.state;
    return (
      <div className="Hideable">
        <button onClick={this.handleClick}>{show ? 'Off' : 'On'}</button>
        {show && children}
      </div>
    );
  }
}

export default Hideable;
