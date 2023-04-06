import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logInHandler(state, action) {
            state.userName = action.payload;
            state.isLoggedIn = true;
        },
        logOutHandler(state){
            state.userName = null;
            state.isLoggedIn = false;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
