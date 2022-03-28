import { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import './Card.css';

const classNames = require('classnames');

const Card = props => {
    
    const [updatedCard, setUpdatedCard] = useState({...props.card})
    
    const [viewMode, setViewMode] = useState(true);
    const [checked, setChecked] = useState(false);
    
    if (props.viewModeOnly && !viewMode) {
        setViewMode(true);
        setUpdatedCard({
            ...props.card
        });
    }

    const cardCloseHandler = () => {
        setUpdatedCard({
            ...props.card
        });
    }
      
    const cardUpdateHandler = () => {
        setViewMode(true);
        props.onUpdate(updatedCard);
    }

    const setCheckedHandler = isChecked => {
        setChecked(isChecked);
    }

    const cardClass = classNames(
        props.className,
        { 'card_selected': checked }
    );

    const setViewModeHandler = viewMode => {
        setViewMode(viewMode);
    }

    const handleObjChange = event => {
        const updatedproperty = event.target.getAttribute("updatedProperty");
        setUpdatedCard({
            ...updatedCard,
            [updatedproperty]: event.target.value
        });
    }

    return (
        <div className={cardClass}>
            <CardHeader 
                card={props.card} 
                viewMode={viewMode} 
                viewModeOnly={props.viewModeOnly}
                checked={checked}
                onSetViewMode={setViewModeHandler} 
                onUpdate={cardUpdateHandler} 
                onClose={cardCloseHandler}
                onCheck={setCheckedHandler} 
            />
            <CardBody 
                card={props.card} 
                updatedCard={updatedCard} 
                viewMode={viewMode} 
                onChange={handleObjChange} 
            />
        </div>
    );
}

export default Card;
