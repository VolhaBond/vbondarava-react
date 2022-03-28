import { useState } from 'react';

import CardList from './Card/CardList';
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

  const cardUpdateHandler = updatedCard => {
    let cardsCopy = [...cards];
    const index = cardsCopy.findIndex(card => card.id === updatedCard.id);
    cardsCopy[index] = updatedCard;
    setCards([...cardsCopy]);
  }

  const setViewModeOnlyHandler = () => {
    setViewModeOnlyChecked(!viewModeOnlyChecked);
  }

  return (
    <div>
      <h1 className="header">Book library</h1>
      <label> <input type="checkbox" id="card_onlyviewmode" onClick={setViewModeOnlyHandler} />Только просмотр</label>
        <CardList cards={cards} viewModeOnlyChecked={viewModeOnlyChecked} onUpdate={cardUpdateHandler} />
    </div>
  );
}

export default App;
