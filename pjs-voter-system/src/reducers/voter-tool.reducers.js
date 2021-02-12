import { combineReducers } from 'redux';

import {
    REFRESH_VOTERS_DONE_ACTION,
    SORT_VOTERS_ACTION,
    EDIT_VOTER_ACTION,
    CANCEL_EDIT_VOTER_ACTION,
    SELECT_VOTER_ACTION,
    SELECT_ALL_VOTERS_ACTION,
    DESELECT_VOTER_ACTION,
    DELETE_SELECTED_VOTERS_ACTION
} from '../actions/voter-tool.actions';

export const votersReducer = (voters=[], action) => {
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.voters;
        default:
            return voters;
    }
};

export const editVoterReducer = ( editVoterId = -1, action ) => {    
    switch (action.type) {

      case EDIT_VOTER_ACTION:
        return action.voterId
  
      case CANCEL_EDIT_VOTER_ACTION:
        return -1
          
      default:
        return -1;
    }
}

export const deleteVotersReducer = ( votersMarkedForDeletion = [], action) => {
    switch (action.type) {
        case SELECT_VOTER_ACTION:            
            return ([...votersMarkedForDeletion, action.voterId]);

        case DESELECT_VOTER_ACTION:            
            const newList = [...votersMarkedForDeletion]
            const elemIdx = votersMarkedForDeletion.indexOf(action.voterId)
            if (elemIdx >= 0) {
                newList.splice(elemIdx, 1);
            }
            return (newList);

        case DELETE_SELECTED_VOTERS_ACTION:
            return []      

        case SELECT_ALL_VOTERS_ACTION:
            return action.voters.map(s=>s.id)

        case REFRESH_VOTERS_DONE_ACTION:
            return [];

        default:
            return votersMarkedForDeletion
    }
}

export const sortFieldReducer = (sortField = 'id', action) => {
    if (action.type === SORT_VOTERS_ACTION) {
        return action.sortField;
    }
    return sortField;
};

