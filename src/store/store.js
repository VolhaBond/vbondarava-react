import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import cardReducer from './card';
import userReducer from './user';

export const logger = store => next => action => {
    console.log("Action is " + action.type + ", params are: " + JSON.stringify(action.payload) );
    next(action);
  }

const store = configureStore({
    reducer: {
        card: cardReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;