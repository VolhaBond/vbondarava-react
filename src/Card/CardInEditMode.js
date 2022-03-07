import {useState} from 'react';
import { VscSave } from 'react-icons/vsc';
import { VscClose } from 'react-icons/vsc';
import './CardInEditMode.css';
import './Card.css';

const CardInEditMode = props => {
    const [updatedCard, setUpdatedCard] = useState({
        updatedTitle: props.card.title,
        updatedDescription: props.card.description
    })
    const cardSaveChangesHandler = () => {
        props.onSave(updatedCard, true);

    }

    const cardCloseHandler = () => {
        props.onClose(true);
    }

    const handleTitleChange = event => {
        setUpdatedCard({
            ...updatedCard,
            updatedTitle: event.target.value
        })
    }

    const handleDescriptionChange = event => {
       setUpdatedCard({
           ...updatedCard,
           updatedDescription: event.target.value
       })
    }

    return (
        <div>
            <h2>
                <div className="icon">
                    <VscSave onClick={cardSaveChangesHandler} />
                    <VscClose onClick={cardCloseHandler} />
                </div>
                <input type="text" className="inputTextBox" value={updatedCard.updatedTitle} onChange={handleTitleChange} />
            </h2>
            <hr />
            <p><input type="text" className="inputTextBox" value={updatedCard.updatedDescription} onChange={handleDescriptionChange} /></p>
        </div>
    );
}

export default CardInEditMode;
