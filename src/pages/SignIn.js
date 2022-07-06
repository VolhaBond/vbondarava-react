import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCtx from '../context/user-context';
import EnhancedInput from '../Helpers/EnhancedInput';
import validations from '../Helpers/Validations';

const SignIn = props => {

    const userCtx = useContext(UserCtx);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: {
            value: '',
            hasError: false
        },
        password: {
            value: '',
            hasError: false
        }
    });

    const emailValidations = [validations.required, validations.emailPattern];
    const passwordValidations = [validations.required, validations.minLength, validations.passwordPattern];

    const inputsData = [
        {
            type: "text",
            id: "username",
            label: "User name",
            rules: emailValidations,
            autocomplete: "off"
        },
        {
            type: "password",
            id: "password",
            label: "Password",
            rules: passwordValidations,
            autocomplete: "on"
        },
    ]

    const signOnHandler = event => {
        event.preventDefault();
        navigate('/home');
        userCtx.logIn(userData.username.value);
    }

    const handleObjChange = (field, value, errorText) => {
        setUserData({
            ...userData,
            [field]: {
                value: value,
                hasError: errorText ? false : true
            }
        })

    }

    const formIsValid = Object.keys(userData).reduce(function (previous, field) {
        return previous && userData[field].hasError;
    }, true); 

        return(
            <div className='input' >
                <section className='modal-main'>
                    <form className='tab' onSubmit={signOnHandler}>
                        <h1 className="header">
                            Sign in here.
                    </h1>

                        {inputsData.map(input =>
                            <EnhancedInput
                                key={input.id}
                                {...input}
                                handleObjChange={handleObjChange}
                                validate={validations.composeValidators(...input.rules)}
                            />
                        )}

                        <button type='submit' disabled={!formIsValid} className="modal_form"> Login</button>
                    </form>
                </section>
            </div>
        );
}

export default SignIn;