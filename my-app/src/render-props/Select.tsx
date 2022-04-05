import styles from './Select.module.css';
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  selected: string;
  items: string[];
  onSelected(item: string): void;
  renderSelected?(selected: string): JSX.Element;
  renderItem?(item: string): JSX.Element | string;
};

type State = {
  open: boolean;
};

class Select extends Component<Props, State> {
  state: State = {
    open: false,
  };
  handleOpen = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  render() {
    const { selected, items, onSelected, renderSelected, renderItem } = this.props;
    const { open } = this.state;

    // const array = [];

    // for (const item of items) {
    //   array.push(<div>{item}</div>)
    // }

    // const array = items.map((item) => <div>{item}</div>);

    return (
      <div className="Select" onClick={this.handleOpen}>
        <div className={styles.selected}>{renderSelected ? renderSelected(selected) : selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div className={styles.item} key={item} onClick={() => onSelected(item)}>
                {renderItem ? renderItem(item) : item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
