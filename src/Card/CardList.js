import {useContext} from 'react';
import './CardList.css';
import CardCtx from '../Helpers/card-context';
import Card from './Card';

const CardList = props => {
    const ctx = useContext(CardCtx);
    /*
        const cardUpdateHandler = updatedCard => {
            props.onUpdate(updatedCard);
        }
    
        const updateCheckedCardListHandler = (cardId, isChecked) => {
            props.onUpdateCheckedCardList(cardId, isChecked);
        }
    
        return <div className="cards_grid">
            {props.cards.map((card) => <CardExtended className="card" key={card.id} card={card} viewModeOnly={props.viewModeOnlyChecked} onUpdate={cardUpdateHandler} onUpdateCheckedCardList={updateCheckedCardListHandler} />)}
        </div>
        */
    return <div className="cards_grid">
        {ctx.cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
}

export default CardList;
