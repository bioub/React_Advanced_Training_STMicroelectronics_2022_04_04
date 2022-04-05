import React, { Component } from 'react';
import { ItemProps } from './Select';
import classNames from 'classnames';

class SelectCustomItem extends Component<ItemProps> {
  render() {
    const { className, onClick, children } = this.props;
    return (
      <div className={classNames('SelectCustomItem', className)} onClick={onClick}>
        {children} !!!!
      </div>
    );
  }
}

export default SelectCustomItem;
