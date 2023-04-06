import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './card';
import userReducer from './user';

const store = configureStore({
    reducer: {
        card: cardReducer,
        user: userReducer
    }
});

export default store;