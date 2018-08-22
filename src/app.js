// @flow

import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Page from 'views/Page';

type Props = {};

class App extends PureComponent<Props> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Page} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToActions(dispatch) {
  return bindActionCreators({}, dispatch);
}

const ConnectedApp = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToActions
  )(App)
);

export default hot(module)(ConnectedApp);
