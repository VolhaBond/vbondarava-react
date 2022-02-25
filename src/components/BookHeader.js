import BookCheckBox from './BookCheckBox';

const BookHeader = (props) => {
    return (
        <h2>
            <BookCheckBox />
            <label>{props.title}</label>
        </h2>
    );
}

export default BookHeader;