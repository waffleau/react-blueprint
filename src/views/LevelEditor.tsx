import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface Props {}

class LevelEditor extends PureComponent<Props> {
  render() {
    return <div>Page</div>;
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToActions(dispatch: () => any) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(LevelEditor);
