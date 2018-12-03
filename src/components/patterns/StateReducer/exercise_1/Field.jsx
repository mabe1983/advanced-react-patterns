import React from "react";

const ON_FIELD_CHANGE = "ON_FIELD_CHANGE";
const ON_FIELD_RESET = "ON_FIELD_RESET";

export class Field extends React.Component {
  initialState = {
    value: "😄"
  };
  state = this.initialState;
  static defaultProps = {
    stateReducer: (state, { type, ...change }) => change
  };

  onChange = e => {
    const { stateReducer } = this.props;
    const { value } = e.target;

    this.setState(state => stateReducer(state, { ...state, value }));
  };

  onReset = e => {
    const { stateReducer } = this.props;

    this.setState(state => stateReducer(state, this.initialState));
  };

  render() {
    const { value } = this.state;
    const { onChange, onReset } = this;

    return this.props.children({ value, onChange, onReset });
  }
}

export default Field;