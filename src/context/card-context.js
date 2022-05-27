import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardCtx = React.createContext({
  cards: [],
  viewModeOnlyChecked: false,
  show: false,
  cardsCount: 0,
  className: '',
  getCount: () => { },
  onAddCard: (newCard) => { },
  onDeleteSelected: () => { },
  setViewModeOnlyHandler: () => { },
  cardUpdateHandler: (updatedCard) => { },
  updateCheckedCardListHandler: (cardId, isChecked) => { },
  showModal: () => { }
});

export const CardCtxProvider = props => {

  const [viewModeOnlyChecked, setViewModeOnlyChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [cards, setCards] = useState([]);

  

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then(response => {
      if (response.status !== 200) {
        throw new Error("There is an issue...");
      }
      const data = response.data.splice(0, 15);
      const transformedData = data.map(el => (
        {
          id: el.Number,
          title: el.Name,
          description: el.About
        }
      ));
      setCards([...transformedData]);
    })
    .catch(function (err) {
      console.log(err);  
    })
  }, []);


  const [checkedCards, setCheckedCards] = useState([]);

  const getCount = () => {
    return cards.length;
  }

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
    let cardList = [...cards];
    setCards(cardList.filter(card => checkedCards.indexOf(card.id) === -1));
    setCheckedCards([]);
  }

  const updateCheckedCardListHandler = (cardId, isChecked) => {
    const updCheckedCards = [...checkedCards];
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

  const addCardHandler = newCard => {
    setCards([...cards, newCard]);
  }

  const closeModalHandler = () => {
    setShow(false);
  }

  const showModal = () => {
    setShow(true);
  }

  return <CardCtx.Provider value={{
    cards: cards,
    show: show,
    className: 'cardItm',
    getCount: getCount,
    viewModeOnlyChecked: viewModeOnlyChecked,
    onAddCard: addCardHandler,
    handleClose: closeModalHandler,
    showModal: showModal,
    onDeleteSelected: cardDeleteSelectedHandler,
    setViewModeOnlyHandler: setViewModeOnlyHandler,
    cardUpdateHandler: cardUpdateHandler,
    updateCheckedCardListHandler: updateCheckedCardListHandler
  }}>{props.children}</CardCtx.Provider>;
}

export default CardCtx;
