// @flow

import React, { PureComponent } from 'react';
import type { Node } from 'react';

type Func = Object => void;

type Props = {
  children: (Object, Func) => Node,
  initialState?: Object,
};
type State = {};

class Container extends PureComponent<Props, State> {
  componentWillMount() {
    this.setState(this.props.initialState || {});
  }

  handleChange = (deltaState: Object) => {
    this.setState(deltaState);
  };

  render() {
    const { children } = this.props;
    return children(this.state, this.handleChange);
  }
}

export default Container;
