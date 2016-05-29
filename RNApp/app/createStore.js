import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { app } from './modules'
import { battles } from './modules'
import { game } from './modules'


import createLogger from 'redux-logger';

const logger = createLogger();
const middleware = applyMiddleware(thunk,logger);

export default (data = {}) => {
  const rootReducer = combineReducers({

    [app.NAME]: app.reducer,
    [battles.NAME]: battles.reducer,
    [game.NAME]: game.reducer


  })

  return createStore(rootReducer, data, middleware)
}
