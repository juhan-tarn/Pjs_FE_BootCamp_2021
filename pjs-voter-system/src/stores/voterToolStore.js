import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { voterToolReducer } from '../reducers/voter-tool.reducers.js';

export const voterToolStore = createStore(
    voterToolReducer,
    composeWithDevTools(applyMiddleware(thunk)),    
    );