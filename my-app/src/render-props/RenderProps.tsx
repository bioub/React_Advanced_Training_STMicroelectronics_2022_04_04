import React, { Component } from 'react';
import Button from './Button';
import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';
import Hideable from './Hideable';
import Select from './Select';
import SelectCustomItem from './SelectCustomItem';

type Props = {};

type State = {
  name: string;
};

class RenderProps extends Component {
  state: State = {
    name: 'Samuel',
  };
  handleSelected = (item: string) => {
    this.setState({
      name: item,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div className="RenderProps">
        {/* <Button element={<b>Value</b>} /> */}
        <Button color="lightblue">
          <b>Value</b>
        </Button>
        <Counter renderCount={(c) => <b>{c}</b>} />
        <Select
          items={['Romain', 'Konstantin', 'Samuel']}
          selected={name}
          onSelected={this.handleSelected}
          renderSelected={(selected) => <b>{selected}</b>}
          //renderItem={(item) => (name === item) ? <b>{item}</b> : item}
          componentItem={SelectCustomItem}
        />
        <p>You have selected : {name}</p>

        <Hideable defaultShow={false}>
          <Clock />
        </Hideable>

        <Hideable defaultShow={false}>
          <Hello name="Romain" />
        </Hideable>
      </div>
    );
  }
}

export default RenderProps;
