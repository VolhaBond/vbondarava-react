import { useState } from 'react';
import CardCheckBox from './CardCheckBox';
import './Card.css';
import './CardInEditMode.css';
import { VscEdit, VscSave, VscClose } from 'react-icons/vsc';

const classNames = require('classnames');

const Card = props => {
    const [updatedCard, setUpdatedCard] = useState({
        updatedTitle: props.card.title,
        updatedDescription: props.card.description
    })
    const [checked, setChecked] = useState(false);
    const [viewMode, setViewMode] = useState(true);
    
    const cardSaveChangesHandler = () => {
        setViewMode(true);
        props.onUpdate(updatedCard);
    }

    const handleObjChange = event => {
        const updatedproperty = event.target.getAttribute("updatedProperty");
        setUpdatedCard({
            ...updatedCard,
            [updatedproperty]: event.target.value
        });
    }
    const cardEditHandler = () => {
        setChecked(false);
        setViewMode(false);
    }

    const cardCheckHandler = checked => {
        setChecked(checked);
    }

    const cardCloseHandler = () => {
        setChecked(false);
        setViewMode(true);
    }

    const cardClass = classNames(
        props.className,
        { 'card_selected': checked }
    );

    return (
        <div className={cardClass}>
            {viewMode ?
                <div>
                    <h2>
                        <VscEdit className="icon" onClick={cardEditHandler} />
                        <CardCheckBox onCheck={cardCheckHandler} />
                        <label>{props.card.title}</label>
                    </h2>
                    <hr />
                    <p>{props.card.description}</p>
                </div>
                :
                <div>
                    <h2>
                        <div className="icon">
                            <VscSave onClick={cardSaveChangesHandler} />
                            <VscClose onClick={cardCloseHandler} />
                        </div>
                        <input type="text" updatedproperty="updatedTitle" className="inputTextBox" value={updatedCard.updatedTitle} onChange={handleObjChange} />
                    </h2>
                    <hr />
                    <p><input type="text" updatedproperty="updatedDescription" className="inputTextBox" value={updatedCard.updatedDescription} onChange={handleObjChange} /></p>
                </div>
            }
        </div>
    );
}

export default Card;
