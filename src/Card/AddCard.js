import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardActions } from '../store/card';
import styles from './AddCard.module.css';
const { v4: uuidv4 } = require('uuid');

const classNames = require('classnames');

const AddCard = props => {

    const dispatch = useDispatch();
    const [newCard, setNewCard] = useState({ title: '', description: '' });

    const addNewCardHandler = event => {
        event.preventDefault();
        dispatch(cardActions.addCardHandler({
            title: newCard.title,
            description: newCard.description,
            id: uuidv4()
        }));
        clearAndCloseModal();
    }

    const clearAndCloseModal = () => {
        setNewCard({ title: '', description: '' });
        dispatch(cardActions.closeModalHandler());
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
                <div id={styles.addcard} className={styles.container}>
                    <button type="submit" >Add and Close</button>
                    <button type="button" onClick={clearAndCloseModal}>Cancel</button>
                </div>
            </form>
        </section>
    </div>);
}

export default AddCard;
