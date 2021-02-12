import {
    ADD_QUESTION_ACTION,
} from '../actions/election-tool.actions';

export const questionsReducer = (questions=[], action) => {
    switch (action.type){
        case ADD_QUESTION_ACTION:
            return [
                ...questions,
                action.question
            ];
        default:
            return questions;
    }
};