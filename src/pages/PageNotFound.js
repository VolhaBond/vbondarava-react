import { Link } from 'react-router-dom';

const PageNotFound = props => {

    return (
        <div className="centered_item">
            <h1 className="header">
                404
                <br />
                Sorry, Page Not Found.
            </h1>
            <Link to='/home' className="large_font">Return Home</Link>
        </div>
    );
}

export default PageNotFound;