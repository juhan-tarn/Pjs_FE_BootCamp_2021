import { combineReducers } from 'redux';
import {
    REFRESH_VOTERS_DONE_ACTION,
    SORT_VOTERS_ACTION,
    EDIT_VOTER_ACTION,
    CANCEL_EDIT_VOTER_ACTION
} from '../actions/voter-tool.actions';

const votersReducer = (voters=[], action) => {
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

export const sortFieldReducer = (sortField = 'id', action) => {
    if (action.type === SORT_VOTERS_ACTION) {
        return action.sortField;
    }

    return sortField;
};


export const voterToolReducer = combineReducers({
    voters: votersReducer,
    editVoterId : editVoterReducer,
    sortField: sortFieldReducer,
});