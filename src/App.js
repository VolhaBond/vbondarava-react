import { useState } from 'react';
import Card from './Card';
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
    cards.map(card => {
      if (card.id === updatedCard.id){
        card.title = updatedCard.title;
        card.description = updatedCard.description;
      }
      return card;
    });
  }

  const setViewModeOnlyHandler = () => {
    const viewModeOnly = !viewModeOnlyChecked;
    setViewModeOnlyChecked(viewModeOnly);
}

  return (
    <div>
      <h1 className="header">Book library</h1>
      <label> <input type="checkbox" id="card_onlyviewmode" onClick={setViewModeOnlyHandler} />Только просмотр</label>
      {cards.map((card) => <Card className="card" key={card.id} card={card} viewModeOnly={viewModeOnlyChecked} onUpdate={cardUpdateHandler} />)}
    </div>
  );
}

export default App;
