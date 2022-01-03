import { ActionType, createAction, props } from "@ngrx/store";
import { Quiz } from '../models/quiz.model';

export const GET_QUIZS = '@Quiz/GetAll';
export const GET_QUIZS_SUCCESS = '@Quiz/GetAllSuccess'

export const getQuizs = createAction(GET_QUIZS);
export const getAllSuccess = createAction(GET_QUIZS_SUCCESS, props<{quizs: Quiz[]}>());

export type  QuizActions = 
 | ActionType<typeof getQuizs>
 | ActionType<typeof getAllSuccess>;