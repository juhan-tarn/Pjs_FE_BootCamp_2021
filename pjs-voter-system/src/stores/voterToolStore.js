import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { votersReducer, sortFieldReducer } from '../reducers/voter-tool.reducers.js';
import { questionsReducer } from '../reducers/election-tool.reducers.js';

export const voterToolStore = createStore(
    combineReducers({
        voters: votersReducer,
        sortField: sortFieldReducer,
        questions:questionsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)),    
    );