import {useSelector} from 'react-redux';
import './CardList.css';
import Card from './Card';


const CardList = props => {
    
    const cards = useSelector(state => state.card.cards);

    return <div className="cards_grid">
        {cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
}

export default CardList;
