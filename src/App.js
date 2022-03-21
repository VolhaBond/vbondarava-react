import { useState } from 'react';
import Card from './Card';
import './index.css';

const App = () => {
  
  const [card, setCard] = useState({
    title: 'Core Java Volume I – Fundamentals',
    description: 'Core Java Volume I – Fundamentals is a Java reference book (Best book for Java)that offers a detailed explanation of various features of Core Java, including exception handling, interfaces, and lambda expressions. ',
  });

  const cardUpdateHandler = card => {
    setCard({
      ...card,
      title: card.updatedTitle,
      description: card.updatedDescription
    });
  }

  return (
    <div>
      <h1 className="header">Book library</h1>
      <Card className="card" onUpdate={cardUpdateHandler} card={card} />
    </div>
  );
}

export default App;
