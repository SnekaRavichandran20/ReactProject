import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import customize from './customize/customize';

const rootReducer = combineReducers({
  cus: customize
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
