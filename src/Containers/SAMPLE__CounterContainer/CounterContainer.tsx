import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CounterState } from '../../Redux/Types/counter';
import {
  decrementCounter,
  incrementCounter
} from '../../Redux/Actions/counter';
import Counter from "../../Components/SAMPLE__Counter";

interface StateToProps {
  readonly count: CounterState;
}

interface DispatchToProps {
  readonly increment: () => void;
  readonly decrement: () => void;
}

type CounterProps = StateToProps & DispatchToProps;

const CounterContainer: FunctionComponent<CounterProps> = ({ increment, decrement, count }) => (
  <Counter
    count={count.count}
    increment={increment}
    decrement={decrement}
  />
);

const mapStateToProps = (state: StateToProps) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
