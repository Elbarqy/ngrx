import { createAction } from '@ngrx/store';

export enum StoreActions {
  INCREMENT = '[COUNTER Component] Increment',
  DECREMENT = '[COUNTER Component] Decrement',
  RESET = "[COUNTER Component] Reset"
}

export const incrementAction = createAction(StoreActions.INCREMENT);
export const decrementAction = createAction(StoreActions.DECREMENT);
export const resetAction = createAction(StoreActions.RESET);

