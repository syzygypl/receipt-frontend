import { Action } from "redux";

export interface CounterState {
  count: number;
}

export enum CounterActionType {
  INCREMENT = "[COUNTER] Increment",
  DECREMENT = "[COUNTER] Decrement"
}

export interface IncrementAction extends Action {
  type: CounterActionType.INCREMENT;
}

export interface DecrementAction extends Action {
  type: CounterActionType.DECREMENT;
}

export type CounterActions = IncrementAction | DecrementAction;
