import styled from 'styled-components'

const StyledCardCheckBox = styled.input.attrs({ type: 'checkbox' }) `
    float:right;

    &:checked {
        box-shadow: 0 0 0 0.1rem white;
    }
`;

const CardCheckBox = props => {
    const checkCardHandler = e => {
        props.onCheck(e.target.checked);
    }
    return <StyledCardCheckBox checked={props.checked} onChange={checkCardHandler} />
}

export default CardCheckBox;
