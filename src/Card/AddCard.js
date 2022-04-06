import { useState } from 'react';
import styles from './AddCard.module.css';
const { v4: uuidv4 } = require('uuid');

const AddCard = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addNewCardHandler = event => {
        event.preventDefault();
        props.onAddCard({
            title: title,
            description: description,
            id: uuidv4()
        });
        setTitle('');
        setDescription('');
    }

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    }

    const descriptionChangeHandler = event => {
        setDescription(event.target.value);
    }

    return (<div className={styles.input}>
        <form onSubmit={addNewCardHandler}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={titleChangeHandler} />
            <label htmlFor="descr">Description</label>
            <input id="descr" type="text" value={description} onChange={descriptionChangeHandler} />
            <button >Add card</button>
        </form>
    </div>);
}

export default AddCard;
