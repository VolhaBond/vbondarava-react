import { useState } from 'react';
import './Card.css';
import CardInEditMode from './CardInEditMode';
import CardInViewMode from './CardInViewMode';

const Card = props => {
    const [checked, setChecked] = useState(false);
    const [viewMode, setViewMode] = useState(true);
    const [card, setCard] = useState(props.card);
   
    const cardCheckHandler = checked => {
        setChecked(checked);
    }

    const cardSaveChangeHandler = (card, viewMode) => {
        setCard({
            ...card,
            title: card.updatedTitle,
            description: card.updatedDescription
        });
        cardSetViewMode(viewMode);
    }

    const cardSetViewMode = viewMode => {
        setViewMode(viewMode);
        setChecked(false);
    }

    return (
        <div className={`${props.className} ${checked ? "card_selected" : ""}`}>
            {viewMode ? <CardInViewMode onCheck={cardCheckHandler} onChangeMode={cardSetViewMode} card={card} /> : <CardInEditMode onSave={cardSaveChangeHandler} onClose={cardSetViewMode} card={card} />}
        </div>
    );
}

export default Card;
