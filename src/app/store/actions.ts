import { createAction, props } from '@ngrx/store';

export enum StoreActions {
  INCREMENT = '[COUNTER Component] Increment',
  DECREMENT = '[COUNTER Component] Decrement',
  RESET = '[COUNTER Component] Reset',
  WITH_PROPS = '[WITH PROPS] NULL',
}

export const incrementAction = createAction(StoreActions.INCREMENT);
export const decrementAction = createAction(StoreActions.DECREMENT);
export const resetAction = createAction(StoreActions.RESET);

export const withPropsAction = createAction(
  StoreActions.WITH_PROPS,
  props<{ value: number }>()
);
