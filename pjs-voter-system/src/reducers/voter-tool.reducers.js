import { combineReducers } from 'redux';
import {
    REFRESH_VOTERS_DONE_ACTION,
    SORT_VOTERS_ACTION,
} from '../actions/voter-tool.actions';

const votersReducer = (voters=[], action) => {
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.voters;
        default:
            return voters;
    }
};

export const sortFieldReducer = (sortField = 'id', action) => {
    if (action.type === SORT_VOTERS_ACTION) {
        return action.sortField;
    }

    return sortField;
};


export const voterToolReducer = combineReducers({
    voters: votersReducer,
    sortField: sortFieldReducer,
});