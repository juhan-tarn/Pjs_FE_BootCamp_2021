export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';
export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const SORT_VOTERS_ACTION = 'SORT_VOTERS';

export const createRefreshVotersRequestAction = () => ({
    type: REFRESH_VOTERS_REQUEST_ACTION,
});
  
export const createRefreshVotersDoneAction = (voters) => ({
    type: REFRESH_VOTERS_DONE_ACTION,
    voters,
});
  
export const refreshVoters = () => {
    return dispatch => {
        dispatch(createRefreshVotersRequestAction);
        return fetch('http://localhost:3060/voters')
            .then(res => res.json())
            .then(voters => {
                dispatch(createRefreshVotersDoneAction(voters));
            }
        );

    };
};

export const createSortVotersAction = sortField => ({
    type: SORT_VOTERS_ACTION,
    sortField,
  });

  