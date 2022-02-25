import './BookCheckBox.css';

const selectBook = (e) => {
    const book = e.target.parentElement.parentElement;
    e.target.checked ? book.classList.add("book_selected") : book.classList.remove("book_selected");;
}

const BookCheckBox = (props) => {
    return <input type="checkbox" id="book_chkbox" onClick={selectBook} />
}

export default BookCheckBox;