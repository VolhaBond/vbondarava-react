import {useState} from 'react';

const EnhancedInput = props => {
    const [error, setError] = useState('');
    
    const inputId = props.id;

    const handleObjChange = event => {
        //validate
        const value = event.target.value;
        const error = props.validate(value);
        setError(error);
        props.handleObjChange(inputId, value, error);
    }

    return (
        <>
            <label htmlFor={inputId}>{props.label}</label>
            <br />
            <input
                type={props.type}
                id={inputId}
                value={props.value}
                onChange={handleObjChange}
                onBlur={handleObjChange}
                autoComplete={props.autocomplete}
            />
            <p className="error">{error}</p>
        </>
    )
}

export default EnhancedInput;
