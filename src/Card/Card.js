import {useState} from 'react';
import './Card.css';
import CardCheckBox from './CardCheckBox';

const classNames = require('classnames');

const Card = props => {
    const [checked, setChecked] = useState(false);

    const cardCheckHandler = checked => {
        setChecked(checked);
    }
    
    const cardClass = classNames(
        props.className, 
        {'card_selected': checked}
    );

    return (
        <div className={cardClass}>
            <h2>
                <CardCheckBox onCheck={cardCheckHandler} />
                <label>{props.card.title}</label>
            </h2>
            <hr />
            <p>{props.card.description}</p>
        </div>
    );
}

export default Card;
