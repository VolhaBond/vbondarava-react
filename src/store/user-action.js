import { userActions } from '../store/user';

export const fetchUserData = () => {
    return (dispatch) => {
        const userName = localStorage.getItem('userName');
        dispatch(userActions.logInHandler({userName, password: 'test'}));
        return userName;
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('userName');
        dispatch(userActions.logOutHandler());
    }
}
