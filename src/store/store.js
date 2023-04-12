import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger'

import cardReducer from './card';
import userReducer from './user';

const logger = createLogger({
    log: 'info',
})

const store = configureStore({
    reducer: {
        card: cardReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;