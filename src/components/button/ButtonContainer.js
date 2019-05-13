import React, { Component } from 'react';
import { fromJS } from 'immutable';
import AButton from './AButton';

export default class ButtonContainer extends Component {
  state = {
    data: fromJS({
      clicks: 0,
      disabled: false,
      text: ''
    })
  };
  get data() {
    return this.state.data;
  }
  set data(data) {
    this.setState({ data });
  }
  onClick = () => {
    this.data = this.data.update('clicks', c => c + 1);
  };
  render() {
    return <AButton onClick={this.onClick} {...this.data.toJS()} />;
  }
  static getDerivedStateFromProps({ disabled, text }, state) {
    return {
      ...state,
      data: state.data.set('disabled', disabled).set('text', text)
    };
  }
}
ButtonContainer.defaultProps = {
  text: 'A Button'
};
