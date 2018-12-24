import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Page from 'views/Page';

interface Props extends RouteComponentProps<any> {}

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

function mapDispatchToActions(dispatch: () => any) {
  return bindActionCreators({}, dispatch);
}

const ConnectedAppWithRouter = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToActions
  )(App)
);

export default hot(module)(ConnectedAppWithRouter);
