import {
    ADD_QUESTION_ACTION, REFRESH_ELECTIONS_DONE_ACTION, RESET_QUESTIONS_ACTION,
} from '../actions/election-tool.actions';

export const electionsReducer = (elections=[], action) => {
    switch(action.type) {
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.elections;
        default:
            return elections;
    }
};

export const questionsReducer = (questions=[], action) => {
    switch (action.type){
        case ADD_QUESTION_ACTION:
            return [
                ...questions,
                action.question
            ];
        case RESET_QUESTIONS_ACTION:
            return [];
        default:
            return questions;
    }
};