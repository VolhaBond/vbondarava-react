import {useState} from 'react';
import './Book.css';
import BookCheckBox from './BookCheckBox';

const Book = props => {
    const [checked, setChecked] = useState('');

    const bookCheckHandler = checked => {
        setChecked(checked);
    }
    
    return (
        <div className={`${props.className} ${checked ? "book_selected" : ""}`}>
            <h2>
                <BookCheckBox onCheck={bookCheckHandler} book={props.book}/>
                <label>{props.book.title}</label>
            </h2>
            <hr />
            <p>{props.book.description}</p>
        </div>
    );
}

export default Book;