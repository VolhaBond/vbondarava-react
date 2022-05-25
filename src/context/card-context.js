import React, { useState, useCallback, useEffect } from 'react';

const CardCtx = React.createContext({
  cards: [],
  viewModeOnlyChecked: false,
  show: false,
  error: null,
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
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);
  const axios = require('axios');

  const fetchCardsHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json');
      if (response.status !== 200) {
        throw new Error("There is an issue...");
      }
      const data = await response.data;
      let transformedData = [];
      for (let i = 0; i <= data.length && i < 15; i++) {
        const row = data[i];
        transformedData.push({
          id: row.Number,
          title: row.Name,
          description: row.About
        })
      }
      setCards([...transformedData]);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }, [axios]);

  useEffect(() => {
    fetchCardsHandler();
  }, [fetchCardsHandler]);


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
    error: error,
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
