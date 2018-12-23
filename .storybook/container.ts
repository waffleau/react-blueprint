// @flow

import React, { PureComponent } from 'react';

interface Props {
  children: any;
  initialState?: Object;
}

class Container extends PureComponent<Props> {
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
