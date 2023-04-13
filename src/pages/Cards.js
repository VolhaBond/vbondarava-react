import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../store/card';
import CardList from '../Card/CardList';
import AddCard from '../Card/AddCard';
import { VscTrash } from 'react-icons/vsc';
import Badge from 'react-bootstrap/Badge';

const Cards = props => {
   
    const dispatch = useDispatch();
    const count = useSelector(state => state.card.cards.length);
    const showModal = useSelector(state => state.card.show);
    
    const showModalHandler = () => {
        dispatch(cardActions.showModal());
    }

    const cardDeleteHandler = () => {
        dispatch(cardActions.cardDeleteSelectedHandler());
    }

    return (<>
        <h1 className="header">
            Cards
          <Badge className="badge bg-secondary">{count}</Badge>
        </h1>
        {showModal && <AddCard />}
        <h3><button type="button" className="tab" onClick={showModalHandler}>
            <b>Добавить новую карточку</b>
        </button></h3>
        <VscTrash className="icon_right" onClick={cardDeleteHandler} />
        <CardList />
    </>);
}

export default Cards;
