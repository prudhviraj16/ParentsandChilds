import {combineReducers, createStore,applyMiddleware} from 'redux'

import reduxThunk from 'redux-thunk'
import toggleReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'

// const rootReducer = combineReducers()
const store = createStore(toggleReducer,composeWithDevTools(applyMiddleware(reduxThunk,createLogger())))

export default store