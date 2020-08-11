import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootreducer';

export default createStore(rootReducer, applyMiddleware(logger));
