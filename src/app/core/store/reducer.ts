import { createReducer, on, State} from "@ngrx/store";
import { QuizState } from "./state";
import * as QuizActions from '../store/actions'

const initialState: QuizState = {
    items : [],
};

// export const quizReducer = createReducer(
//     initialState,
//     on(quizActions.getQuizs, state => ({...state, items: action.payload}))
// );

export function quizReducer(
    state: QuizState = initialState,
    action: QuizActions.QuizActions
): QuizState {
    switch(action.type) {
        case QuizActions.GET_QUIZS:
            return {...state};
        case QuizActions.GET_QUIZS_SUCCESS: {
            // let items = action.quizs
            return {...state, items:action.quizs}
        }
        default: 
            return state;
    }
}   