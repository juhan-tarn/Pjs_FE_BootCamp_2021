export const ADD_QUESTION_ACTION = 'ADD_QUESTION';
export const ADD_ELECTIONS_REQUEST_ACTION = 'ADD_ELECTIONS_REQUEST';

export const createAddQuestionAction = (question) => ({
    type: ADD_QUESTION_ACTION,
    question,
});

export const createAddElectionRequestAction = () => ({
    type: ADD_ELECTIONS_REQUEST_ACTION,
});

export const addElection = election => {
    return dispatch => {
        dispatch(createAddElectionRequestAction());
            
        return fetch('http://localhost:3060/elections', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(election),
        });
    };
};