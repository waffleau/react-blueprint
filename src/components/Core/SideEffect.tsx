import { PureComponent } from 'react';

interface Props {
  watch: string[];
  onChange: () => any;
}

export class SideEffect extends PureComponent<Props> {
  componentDidMount() {
    this.checkForChanges({ ...this.props, watch: [] }, this.props);
  }

  componentDidUpdate(prevProps: Props) {
    this.checkForChanges(prevProps, this.props);
  }

  checkForChanges(prevProps: Props, nextProps: Props) {
    const changes = nextProps.watch
      .map(prop => prevProps.watch.indexOf(prop) === -1)
      .filter(prop => !!prop);

    if (changes.length > 0) nextProps.onChange();
  }

  render(): null {
    return null;
  }
}

export default SideEffect;
