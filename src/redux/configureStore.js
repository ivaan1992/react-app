import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import characterReducer from './Characters/CharactersRedux';

const rootReducer = combineReducers({
  characterReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
