import { Component, ComponentType } from 'react';

type EnhancedProps = {
  defaultShow?: boolean;
};
type State = {
  show: boolean;
}

export function hideable<BaseProps>(BaseComponent: ComponentType<BaseProps>) {
  class EnhancedComponent extends Component<BaseProps & EnhancedProps, State> {
    state: State = {
      show: true,
    }
    handleClick = () => {
      const { show } = this.state;
      this.setState({
        show: !show,
      });
    }
    render() {
      const { defaultShow, ...baseProps} = this.props;
      const { show } = this.state;
      return (
        <div className="EnhancedComponent">
          <button onClick={this.handleClick}>{show ? 'Off' : 'On'}</button>
          {show && <BaseComponent {...baseProps as BaseProps} />}
        </div>
      );
    }
  }

  return EnhancedComponent;
}
