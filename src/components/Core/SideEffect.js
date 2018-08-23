// @flow

import { PureComponent } from 'react';

type Props = {
  watch: any[],
  onChange: () => any,
};

export class SideEffect extends PureComponent<Props> {
  componentDidMount() {
    this.checkForChanges({ watch: [] }, this.props);
  }

  componentDidUpdate(prevProps: Object) {
    this.checkForChanges(prevProps, this.props);
  }

  checkForChanges(prevProps: Object, nextProps: Object) {
    const changes = nextProps.watch
      .map(prop => prevProps.watch.indexOf(prop) === -1)
      .filter(prop => !!prop);

    if (changes.length > 0) nextProps.onChange();
  }

  render() {
    return null;
  }
}

export default SideEffect;
