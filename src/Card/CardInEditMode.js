import { useState } from 'react';
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
   
    const handleObjChange = event => {
        const updatedproperty = event.target.getAttribute("updatedProperty");
        setUpdatedCard({
            ...updatedCard,
            [updatedproperty]: event.target.value
        });
    }

    return (
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
    );
}

export default CardInEditMode;
