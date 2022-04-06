import styles from './Select.module.css';
import React, { Component, createRef, PointerEvent } from 'react';
import classNames from 'classnames';

type Props = {
  selected: string;
  items: string[];
  onSelected(item: string): void;
};

type State = {
  open: boolean;
};

class Select extends Component<Props, State> {
  state: State = {
    open: false,
  };
  hostRef = createRef<HTMLDivElement>();
  handleOpen = (event: PointerEvent<HTMLDivElement>) => {
    // event.stopPropagation();
    console.log('Select click');
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  componentDidMount() {
    document.addEventListener('click', (event) => {
      console.log('document click');

      if (!this.hostRef.current?.contains(event.target as Node)) {
        this.setState({
          open: false,
        });
      }
    });
  }
  render() {
    const { selected, items, onSelected } = this.props;
    const { open } = this.state;

    // const array = [];

    // for (const item of items) {
    //   array.push(<div>{item}</div>)
    // }

    // const array = items.map((item) => <div>{item}</div>);

    return (
      <div className="Select" onClick={this.handleOpen} ref={this.hostRef}>
        <div className={styles.selected}>{selected}</div>
        {open && (
          <div className={styles.menu}>
            {items.map((item) => (
              <div className={styles.item} key={item} onClick={() => onSelected(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
