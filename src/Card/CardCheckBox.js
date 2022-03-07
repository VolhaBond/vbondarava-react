import './CardCheckBox.css';

const CardCheckBox = props => {
    const checkCardHandler = e => {
        props.onCheck(e.target.checked);
    }

    return <input type="checkbox" id="card_chkbox" onClick={checkCardHandler} />
}

export default CardCheckBox;
