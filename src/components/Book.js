import './Book.css';
const Book = (props) => {
    return (
        <div className="books">
            <h2>{props.book.title}</h2>
            <hr/>
            <p>{props.book.description}</p>
        </div>
    );
}

export default Book;