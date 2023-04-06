import { useEffect } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Cards from './pages/Cards';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import { cardActions } from './store/card';
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userName);
  //const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    
   
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
    dispatch(cardActions.setCards([...transformedData]));
  })
  .catch(function (err) {
    console.log(err);  
  })
}, [dispatch]);

  return (
    <div>
      <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='home' >Home</NavLink>
      <div className="icon_right">
        {!userName && <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='signin' >Sign In</NavLink>}
        {userName}
      </div>
      <Routes>
        <Route path="/" element={<Navigate to='home' />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;
