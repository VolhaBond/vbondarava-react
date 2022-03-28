import styles from './CardCheckBox.module.css';


const CardCheckBox = props => {
    const checkCardHandler = e => {
        props.onCheck(e.target.checked);
    }

    return <input type="checkbox" className={`${styles.card_chkbox} ${props.checked && styles.checked}`} defaultChecked={props.checked} onClick={checkCardHandler} />
}

export default CardCheckBox;
