import { CounterActionType, IncrementAction, DecrementAction } from "../Types/counter";

export const incrementCounter = (): IncrementAction => ({
  type: CounterActionType.INCREMENT
});

export const decrementCounter = (): DecrementAction => ({
  type: CounterActionType.DECREMENT
});
