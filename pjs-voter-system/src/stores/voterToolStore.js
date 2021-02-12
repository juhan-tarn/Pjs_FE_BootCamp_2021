import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { votersReducer, sortFieldReducer } from '../reducers/voter-tool.reducers.js';
import { electionsReducer, questionsReducer } from '../reducers/election-tool.reducers.js';

export const voterToolStore = createStore(
    combineReducers({
        voters: votersReducer,
        elections: electionsReducer,
        sortField: sortFieldReducer,
        questions:questionsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)),    
    );