import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './create.actions';

const initialState = 0;
const _counterReducer = createReducer(
  initialState,
  on(increment, (state, data) => {
    return state + 1
  }),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState)
);
export const counterReducer = (state: any, action: any) => {
  return _counterReducer(state, action);
};
