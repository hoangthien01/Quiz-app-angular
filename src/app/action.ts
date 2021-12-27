import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Quiz Page] AllQuiz',
  props<{ username: string; password: string }>()
);