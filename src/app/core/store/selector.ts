import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuizState } from './state'

const featureQuiz = createFeatureSelector<QuizState>('feature_quiz');

export const quizsSelector = createSelector(featureQuiz, state => state.items)