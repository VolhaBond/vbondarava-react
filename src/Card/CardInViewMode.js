import {useState} from 'react';
import CardCheckBox from './CardCheckBox';
import { VscEdit } from 'react-icons/vsc';
import './Card.css';

const CardInViewMode = props => {
    const [checked, setChecked] = useState('');

    const cardEditHandler = () => {
        props.onChangeMode(false);
    }

    const cardCheckHandler = checked => {
        props.onCheck(checked);
    }

    return (
        <div>
            <h2>
                <VscEdit className="icon" onClick={cardEditHandler} />
                <CardCheckBox onCheck={cardCheckHandler} />
                <label>{props.card.title}</label>
            </h2>
            <hr />
            <p>{props.card.description}</p>
        </div>
    );
}

export default CardInViewMode;
