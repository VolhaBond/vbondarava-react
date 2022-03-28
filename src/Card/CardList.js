import './CardList.css';
import Card from './Card';

const CardList = props => {

    const cardUpdateHandler = updatedCard => {
        props.onUpdate(updatedCard);
    }

    return <div className="cards_grid">
        {props.cards.map((card) => <Card className="card" key={card.id} card={card} viewModeOnly={props.viewModeOnlyChecked} onUpdate={cardUpdateHandler} />)}
    </div>
}

export default CardList;
