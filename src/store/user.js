import {createSlice} from '@reduxjs/toolkit';

const adminCred = {
    userName: 'testAdmin@gmail.com',
    password: '12345yuiopp',
}

const initialState = {
    userName: null, //localStorage.getItem('userName'),
    isLoggedIn: false,
    isAdmin: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logInHandler(state, action) {
            const userName = action.payload.userName
            
            if (userName !== null){
                state.userName = userName;
                state.isLoggedIn = true;
                localStorage.setItem('userName', userName); 
                if (userName === adminCred.userName && action.payload.password === adminCred.password){
                    state.isAdmin = true;
                    localStorage.setItem('isAdmin', true);
                }           
            }
        },
        logOutHandler(state){
            /*
            state.userName = null;
            state.isLoggedIn = false;
            state.isAdmin = false;
            */
            state.userName = initialState.userName;
            state.isLoggedIn = initialState.isLoggedIn;
            state.isAdmin = initialState.isAdmin;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
