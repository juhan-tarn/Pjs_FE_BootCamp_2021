export const ADD_QUESTION_ACTION = 'ADD_QUESTION';
export const ADD_ELECTIONS_REQUEST_ACTION = 'ADD_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';
export const RESET_QUESTIONS_ACTION = 'RESET_QUESTIONS';
export const VIEW_RESULT_ACTION = 'VIEW_RESULT';

export const createAddQuestionAction = (question) => ({
    type: ADD_QUESTION_ACTION,
    question,
});

export const createAddElectionRequestAction = () => ({
    type: ADD_ELECTIONS_REQUEST_ACTION,
});

export const createResetQuestionsAction = () => ({
    type: RESET_QUESTIONS_ACTION
,});

export const addElection = election => {
    return dispatch => {
        dispatch(createAddElectionRequestAction());
            
        return fetch('http://localhost:3060/elections', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(election),
        })
        .then(() => dispatch(refreshElections()));
    };
};

export const createRefreshElectionsRequestAction = () => ({
    type: REFRESH_ELECTIONS_REQUEST_ACTION,
});

export const createRefreshElectionsDoneAction = (elections) => ({
    type: REFRESH_ELECTIONS_DONE_ACTION,
    elections,
});

export const createViewResultAction = electionId => ({
    type: VIEW_RESULT_ACTION,
    electionId,
});

export const refreshElections = () => {
    return dispatch => {
        dispatch(createRefreshElectionsRequestAction());
        return fetch('http://localhost:3060/elections')
            .then(res => res.json())
            .then(elections => {
                dispatch(createRefreshElectionsDoneAction(elections));
            });
    };
};