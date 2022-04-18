import { useContext } from 'react';
import CardCtx from './Helpers/card-context.js';
import CardList from './Card/CardList';
import AddCard from './Card/AddCard';
import { VscTrash } from 'react-icons/vsc';
import './index.css';
import Badge from 'react-bootstrap/Badge';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {


  const cardCtx = useContext(CardCtx);
  //<h1 className="header">Cards library <span className="badge badge-secondary">{cardCtx.getCount()}</span></h1>

  return (
    <div>
      <h1 className="header">
        Cards
        <Badge className="badge bg-secondary">{cardCtx.getCount()}</Badge>
      </h1>
      {cardCtx.show && <AddCard />}
      <h3><button type="button" className="tab" onClick={cardCtx.showModal}>
        <b>Добавить новую карточку</b>
      </button></h3>
      <VscTrash className="icon" onClick={cardCtx.onDeleteSelected} />
      <label> <input type="checkbox" id="card_onlyviewmode" onClick={cardCtx.setViewModeOnlyHandler} />Только просмотр</label>
      <CardList />
    </div>
  );
}

export default App;
