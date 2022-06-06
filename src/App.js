import { useContext } from 'react';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Cards from './pages/Cards';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import UserCtx from './context/user-context';
import './index.css';

const App = () => {
  const userCtx = useContext(UserCtx);
  const currPath = useLocation().pathname;

  return (
    <div>
      <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='home' className="icon_left" >Home</NavLink>
      {userCtx.userName ?
        (<div className="icon_right">{userCtx.userName} <Link to='/signin' onClick={userCtx.logOut}>SignOut</Link></div>)
        :
        (currPath === '/signin' ? <div className="icon_right">You are on SignOn</div> : <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='signin' className="icon_right" >Sign In</NavLink>)
      }

      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

    </div >
  );
}

export default App;
