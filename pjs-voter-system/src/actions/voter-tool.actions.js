import { EEXIST } from "constants";

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const REMOVE_VOTER_REQUEST_ACTION = 'REMOVE_VOTER_REQUEST';
export const SAVE_VOTER_REQUEST_ACTION = 'SAVE_VOTER_REQUEST';

export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';
export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';

export const SORT_VOTERS_ACTION = 'SORT_VOTERS';
export const EDIT_VOTER_ACTION = "EDIT_VOTER"
export const CANCEL_EDIT_VOTER_ACTION = "CANCEL_EDIT_VOTER"
export const SELECT_VOTER_ACTION = "SELECT_VOTER"
export const SELECT_ALL_VOTERS_ACTION = "SELECT_VOTERS"
export const DESELECT_VOTER_ACTION = "DESELECT_VOTER"
export const DELETE_SELECTED_VOTERS_ACTION = "DELETE_SELECTED_VOTERS"

export const createRefreshVotersRequestAction = () => ({
    type: REFRESH_VOTERS_REQUEST_ACTION,
});
  
export const createRefreshVotersDoneAction = (voters) => ({
    type: REFRESH_VOTERS_DONE_ACTION,
    voters,
});

export const createAddVotersRequestAction = () => ({
    type: ADD_VOTER_REQUEST_ACTION,
})

export const createRemoveVoterRequestAction = (voterId) => ( { 
    type: REMOVE_VOTER_REQUEST_ACTION, 
    voterId 
});

export const createSaveVoterRequestAction = (voter) => ( { 
    type: SAVE_VOTER_REQUEST_ACTION, 
    voter 
});

export const createSelectVoterAction = (voterId) => ( {
    type: SELECT_VOTER_ACTION, 
    voterId
})

export const createSelectAllVotersAction = (voters) => ( {
    type: SELECT_ALL_VOTERS_ACTION, 
    voters
})


export const createDeSelectVoterAction = (voterId) => ( {
    type: DESELECT_VOTER_ACTION, 
    voterId
})

export const addVoter = voter => {

    const newVoter = { ...voter, pjsNumber : "2021-" + voter.id }
    
    return dispatch => {
        dispatch(createAddVotersRequestAction());
        return fetch('http://localhost:3060/voters', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVoter),
        })
        .then(() => dispatch(refreshVoters()));
    };
};
  
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


export const saveVoter = (voter) => {
    return dispatch => {
      dispatch(createSaveVoterRequestAction());
      return fetch('http://localhost:3060/voters/' + voter.id,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(voter),
        }
      )
      .then(() => dispatch(refreshVoters()))
    };
};

export const removeVoter = (voterId) => {
    return dispatch => {
      dispatch(createRemoveVoterRequestAction());
      return fetch('http://localhost:3060/voters/' + encodeURIComponent(voterId),
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
      )
      .then(() => dispatch(refreshVoters()))
    };
};

async function deleteMultiple(selectedVoters) {
    await Promise.all(
        selectedVoters.map(async (id) => {
          const response = await fetch(`http://localhost:3060/voters/${id}`,
                    {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                    });
        })
    )
}

export const removeSelectedVoters = (selectedVoters) => {
    return dispatch => {
      dispatch(createRemoveVoterRequestAction());
      deleteMultiple(selectedVoters).then(() => dispatch(refreshVoters()))
    };
};

export const createSortVotersAction = sortField => ({
    type: SORT_VOTERS_ACTION,
    sortField,
  });

export const createEditVoterAction = voterId => ( { 
    type: EDIT_VOTER_ACTION, 
    voterId
});
export const createCancelEditVoterAction = () => ( { 
    type: CANCEL_EDIT_VOTER_ACTION
});
  

  