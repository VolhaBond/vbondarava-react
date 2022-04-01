import { useState } from 'react';

import CardList from './Card/CardList';
import { VscTrash } from 'react-icons/vsc';
import './index.css';

const App = () => {
  const [viewModeOnlyChecked, setViewModeOnlyChecked] = useState(false);

  const [cards, setCards] = useState([{
    id: 1,
    title: 'Core Java Volume I – Fundamentals',
    description: 'Java reference book. ',
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Description2. ',
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Description3. ',
  },
  {
    id: 4,
    title: 'Title4',
    description: 'Description4. ',
  },
  {
    id: 5,
    title: 'Title5',
    description: 'Description5. ',
  },
  {
    id: 6,
    title: 'Title6',
    description: 'Description6. ',
  },
  {
    id: 7,
    title: 'Title7',
    description: 'Description7. ',
  }
  ]);

  const [checkedCards, setCheckedCards] = useState([]);

  const cardUpdateHandler = updatedCard => {
    let cardsCopy = [...cards];
    const index = cardsCopy.findIndex(card => card.id === updatedCard.id);
    cardsCopy[index] = updatedCard;
    setCards([...cardsCopy]);
  }

  const setViewModeOnlyHandler = () => {
    setViewModeOnlyChecked(!viewModeOnlyChecked);
  }

  const cardDeleteSelectedHandler = () => {
    let cardList = cards;
    checkedCards.forEach(checkedCardId => { 
      const index = cardList.map(cardElem => cardElem.id).indexOf(checkedCardId);
      if (index !== -1) {
        cardList.splice(index, 1);
      }
    });
    setCards([...cardList]);
    setCheckedCards([]);
  }

  const updateCheckedCardListHandler = (cardId, isChecked) => {
    const updCheckedCards = checkedCards;
    if (isChecked) {
      //add
      updCheckedCards.push(cardId);
    } else {
      //remove
      const index = checkedCards.indexOf(cardId);
      if (index !== -1) {
        updCheckedCards.splice(index, 1);
      }
    }
    setCheckedCards(updCheckedCards);
  }

  return (
    <div>
      <h1 className="header">Book library</h1>
      <VscTrash className="icon" onClick={cardDeleteSelectedHandler} />
      <label> <input type="checkbox" id="card_onlyviewmode" onClick={setViewModeOnlyHandler} />Только просмотр</label>
      <CardList cards={cards} viewModeOnlyChecked={viewModeOnlyChecked} onUpdate={cardUpdateHandler} onUpdateCheckedCardList={updateCheckedCardListHandler} />
    </div>
  );
}

export default App;
