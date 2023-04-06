import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { cardActions } from '../store/card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import LoaderHOC from '../Helpers/LoaderHOC';
import './Card.css';
import PropTypes from 'prop-types';

const classNames = require('classnames');

const Card = props => {

    const dispatch = useDispatch();
    const viewModeOnlyChecked = useSelector(state => state.card.viewModeOnlyChecked);
    const className = useSelector(state => state.card.className);
    
    const [updatedCard, setUpdatedCard] = useState({ ...props.card })
    const [viewMode, setViewMode] = useState(true);
    const [checked, setChecked] = useState(false);

    if (viewModeOnlyChecked && !viewMode) {
        setViewMode(true);
        setUpdatedCard({
            ...props.card
        });
    }

    const cardCloseHandler = () => {
        setUpdatedCard({
            ...props.card
        });
    }

    const cardUpdateHandler = () => {
        dispatch(cardActions.cardUpdateHandler(updatedCard));
        setViewMode(true);
    }

    const setCheckedHandler = isChecked => {
        setChecked(isChecked);
        dispatch(cardActions.updateCheckedCardListHandler({cardId: props.card.id, isChecked}));
    }

    const cardClass = classNames(
        className,
        { 'card_selected': checked }
    );

    const setViewModeHandler = viewMode => {
        setViewMode(viewMode);
    }

    const handleObjChange = event => {
        const updatedproperty = event.target.getAttribute("updatedProperty");
        setUpdatedCard({
            ...updatedCard,
            [updatedproperty]: event.target.value
        });
    }

    return (
            <div className={cardClass}>
            <table className="card_table">
                <tbody>
                    <tr><td className="tableHeader">
                        <CardHeader
                            card={props.card}
                            viewMode={viewMode}
                            checked={checked}
                            onSetViewMode={setViewModeHandler}
                            onUpdate={cardUpdateHandler}
                            onClose={cardCloseHandler}
                            onCheck={setCheckedHandler}
                        />
                    </td></tr>
                    <tr><td>
                        <CardBody
                            card={props.card}
                            updatedCard={updatedCard}
                            viewMode={viewMode}
                            onChange={handleObjChange}
                        />
                    </td></tr>
                </tbody>
            </table>
        </div>
    );
}

Card.propTypes = {
    viewModeOnlyChecked: PropTypes.bool,
    card: PropTypes.exact({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
      }),
    className: PropTypes.string
};

export default LoaderHOC(Card);
