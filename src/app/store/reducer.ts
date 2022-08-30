import {
  incrementAction,
  decrementAction,
  resetAction,
  withPropsAction,
} from './actions';
import { createReducer, on } from '@ngrx/store';
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => state + 1),
  on(decrementAction, (state) => state - 1),
  on(resetAction, (state) => 0),
  on(withPropsAction, (state, action) => action.value)
);
