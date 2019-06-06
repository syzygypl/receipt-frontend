import {
  CounterActionType,
  CounterState,
  CounterActions
} from '../Types/counter';

const initialState: CounterState = {
  count: 0
};

const count = (
  state: CounterState = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case CounterActionType.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    default: {
      return state;
    }
  }
};

export default count;
