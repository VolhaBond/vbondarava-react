import './BookCheckBox.css';

const BookCheckBox = props => {
    const checkBookHandler = e => {
        props.onCheck(e.target.checked);
    }

    return <input type="checkbox" id="book_chkbox" onClick={checkBookHandler} />
}

export default BookCheckBox;