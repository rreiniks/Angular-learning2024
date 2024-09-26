import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Incerement',
  props<{ value: number }>()
);
