import { createAction, props } from '@ngrx/store';
import { Ilogin } from '../interfaces/loginInterface';
export const increment = createAction(
  '[Counter Component] Increment',
  props<Ilogin>()
);
export const decrement = createAction(
  '[Counter Component] Decrement',
  props<Ilogin>()
  );
export const reset = createAction('[Counter Component] Reset');
