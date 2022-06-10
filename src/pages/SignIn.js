import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserCtx from '../context/user-context';

const SignIn = props => {

    const userCtx = useContext(UserCtx);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        userName: '',
        password: ''
    });
    
    const signOnHandler = event => {
        event.preventDefault(); 
    
        navigate('/home');
        userCtx.logIn(userData.userName);
    }

    const handleObjChange = event => {
        const updatedField = event.target.getAttribute("updatedfield");
        setUserData({
            ...userData,
            [updatedField]: event.target.value
        });
    }

    return (
        <div className='input' >
            <section className='modal-main'>
                <form className='tab' onSubmit={signOnHandler}>
                    <h1 className="header">
                        Sign in here.
                    </h1>
                    <label htmlFor='username'>User name</label>
                    <br />
                    <input type='text' id='username' updatedfield="userName" value={userData.userName} onChange={handleObjChange} />
                    <br />
                    <label htmlFor='username'>Password</label>
                    <br />
                    <input type='password' autoComplete='on' id='password' updatedfield="password" value={userData.password} onChange={handleObjChange} />
                    <br />
                    <button type='submit' className="modal_form"> Login</button>
                </form>
            </section>
        </div>
    );
}

export default SignIn;