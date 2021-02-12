import {
    ADD_ELECTIONS_REQUEST_ACTION,
    ADD_QUESTION_ACTION, REFRESH_ELECTIONS_DONE_ACTION, RESET_QUESTIONS_ACTION, VIEW_RESULT_ACTION
} from '../actions/election-tool.actions';

export const electionsReducer = (elections=[], action) => {
    switch(action.type) {
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.elections;
        default:
            return elections;
    }
};

export const resultsReducer = (resultId=-1, action) => {
    if (action.type === VIEW_RESULT_ACTION) {
        return action.electionId;
    }
    if (
        [
        ADD_QUESTION_ACTION,
        ADD_ELECTIONS_REQUEST_ACTION,
        ].includes(action.type)
    ) {
        return -1;
    }
    return resultId;
}

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