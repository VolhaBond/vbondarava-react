import './Book.css';
import BookHeader from './BookHeader';

const Book = (props) => {
    return (
        <div className="books">
            <BookHeader title = {props.book.title} />
            <hr />
            <p>{props.book.description}</p>
        </div>
    );
}

export default Book;