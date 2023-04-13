import { useEffect } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Cards from './pages/Cards';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import { cardActions } from './store/card';
import './index.css';
import { fetchUserData, logoutUser } from './store/user-action';
import { useCallback } from 'react';
import Settings from './pages/Settings';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);
 
  const userName = useSelector(state => state.user.userName);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const isAdmin = useSelector(state => state.user.isAdmin);
   
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

  function renderAuthButton() {
         if(!isLoggedIn){
          return <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='signin' >Sign In</NavLink>;
         } else {
          return <a href="/home" onClick={logout}>Logout</a>;
         }
  }

console.log(isAdmin);

  return (
    <div>
      {/*<p>Is admin - {isAdmin ? 'yes' : 'no'}</p>*/}
      {isAdmin && <NavLink to='settings' >Settings</NavLink>}
      {userName && <p>Приветствую, {userName}</p>}
                
      <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='home' >Home</NavLink>
      <div className="icon_right">
        {renderAuthButton()}
        
      </div>
      <Routes>
        <Route path="/" element={<Navigate to='home' />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;
