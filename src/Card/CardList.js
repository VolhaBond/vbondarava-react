import {useContext} from 'react';
import './CardList.css';
import CardCtx from '../context/card-context';
import Card from './Card';

const CardList = props => {
    const ctx = useContext(CardCtx);
   
    return <div className="cards_grid">
        {ctx.cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
}

export default CardList;
