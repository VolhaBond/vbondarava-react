import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cards: [],
    viewModeOnlyChecked: false,
    show: false,
    cardsCount: 0,
    className: 'cardItm',
    checkedCards: []
}

const cardSlice = createSlice({
    name: 'cardSlice',
    initialState,
    reducers: {
        setCards(state, action){
            state.cards = action.payload;
        },
        cardUpdateHandler(state, action){
            let cardsCopy = [...state.cards];
            const updatedCard = action.payload;
            const index = cardsCopy.findIndex(card => card.id === updatedCard.id);
            cardsCopy[index] = updatedCard;
            state.cards = [...cardsCopy];
        },
        setViewModeOnlyHandler(state){
            state.viewModeOnlyChecked = !state.viewModeOnlyChecked;
        },
        cardDeleteSelectedHandler(state){
            let cardList = [...state.cards];
            state.cards = (cardList.filter(card => state.checkedCards.indexOf(card.id) === -1));
            state.checkedCards = [];
        },
        updateCheckedCardListHandler(state, action){
            const cardId = action.payload.cardId;
            const isChecked = action.payload.isChecked;
            const updCheckedCards = [...state.checkedCards];
            if (isChecked) {
              //add
              updCheckedCards.push(cardId);
            } else {
              //remove
              const index = state.checkedCards.indexOf(cardId);
              if (index !== -1) {
                updCheckedCards.splice(index, 1);
              }
            }
            state.checkedCards = updCheckedCards;
        },        
        addCardHandler(state, action){
            state.cards = [...state.cards, action.payload];
        },
        closeModalHandler(state){
            state.show = false;
        },
        showModal(state){
            state.show = true;
        }
    }
})

export const cardActions = cardSlice.actions;
export default cardSlice.reducer;
