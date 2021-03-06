import styles from './Select.module.css';
import React, { Component, ComponentType, MouseEventHandler } from 'react';
import classNames from 'classnames';

export type ItemProps = {
  className: string;
  onClick: MouseEventHandler<HTMLElement>;
}

type Props = {
  selected: string;
  items: string[];
  onSelected(item: string): void;
  renderSelected?(selected: string): JSX.Element;
  //renderItem?(item: string): JSX.Element | string;
  componentItem: ComponentType<ItemProps>;
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
    const { selected, items, onSelected, renderSelected, componentItem: Item /* alias */ } = this.props;
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
              // <div className={styles.item} key={item} onClick={() => onSelected(item)}>
              //   {renderItem ? renderItem(item) : item}
              // </div>
              <Item className={styles.item} key={item} onClick={() => onSelected(item)}>
                {item}
              </Item>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
