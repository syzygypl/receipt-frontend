import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import count from './Reducers/counter';
import { CounterState } from "./Types/counter";

const reducers = combineReducers({
  count,
});

export interface State {
  count: CounterState;
}

const configureStore = (initialState?: State) => {
  const composedEnhancers = composeWithDevTools();

  return createStore(reducers, initialState, composedEnhancers);
};

export default configureStore;
