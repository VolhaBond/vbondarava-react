import './CardCheckBox.css';

const CardCheckBox = props => {
    const checkCardHandler = e => {
        props.onCheck(e.target.checked);
    }

    return <input type="checkbox" id="card_chkbox" defaultChecked={props.checked} onClick={checkCardHandler} />
}

export default CardCheckBox;
