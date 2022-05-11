import { useState } from 'react';
import styles from './AddCard.module.css';
const { v4: uuidv4 } = require('uuid');

const classNames = require('classnames');

const AddCard = props => {
    const [newCard, setNewCard] = useState({ title: '', description: '' });

    const addNewCardHandler = event => {
        event.preventDefault();
        props.onAddCard({
            title: newCard.title,
            description: newCard.description,
            id: uuidv4()
        });
        clearAndCloseModal();
    }

    const clearAndCloseModal = () => {
        setNewCard({ title: '', description: '' });
        props.handleClose();
    }

    const handleObjChange = event => {
        const updatedField = event.target.getAttribute("updatedfield");
        setNewCard({
            ...newCard,
            [updatedField]: event.target.value
        });
    }

    const newCardClass = classNames(
        styles.input,
        styles.modal
    );

    return (<div className={newCardClass} >
        <section className={styles["modal-main"]}>
            <form className={styles.tab} onSubmit={addNewCardHandler}>
                <h1 className={styles.container}> Add new card </h1>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" updatedfield="title" value={newCard.title} onChange={handleObjChange} />
                <label htmlFor="descr">Description</label>
                <input id="descr" type="text" updatedfield="description" value={newCard.description} onChange={handleObjChange} />
                <div className={styles.container}>
                    <button type="submit" >Add and Close</button>
                    <button type="button" onClick={clearAndCloseModal}>Cancel</button>
                </div>
            </form>
        </section>
    </div>);
}

export default AddCard;
