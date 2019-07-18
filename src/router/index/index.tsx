import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReduxState, add_num, minus_num, DemoState } from 'src/redux/root_reducer';
import * as CSSModules from 'react-css-modules';
import * as cx from 'classnames';

interface IndexProps {
  demoState: DemoState,
  add_num: typeof add_num,
  minus_num: typeof minus_num,
}
const style=require('./index.scss');
@CSSModules(style, { allowMultiple: true })

class Index extends React.PureComponent<IndexProps> {
  render() {
    const { num } = this.props.demoState;
    return (
      <div>
        <h1>This is a demo.</h1>
        <div>
          <span className={cx(style.is_black, num % 2 === 0 && style.is_red)}>{num}</span>
          <button onClick={() => {this.props.add_num(1); }}>+</button>
          <button onClick={() => {this.props.minus_num(1); }}>-</button>
        </div>
      </div>
    );
  }
}

const map_state_to_props = (state:ReduxState) => ({
  demoState: state.demoState,
});
const map_dispatch_to_props = (dispatch:any) => bindActionCreators({
  add_num,
  minus_num,
}, dispatch);

export default connect(
  map_state_to_props,
  map_dispatch_to_props,
)(Index);