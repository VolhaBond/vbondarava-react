import { useContext } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Cards from './pages/Cards';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import UserCtx from './context/user-context';
import './index.css';

const App = () => {
  const userCtx = useContext(UserCtx);

  return (
    <div>
      <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='home' >Home</NavLink>
      <div className="icon_right">
        {!userCtx.userName && <NavLink className={(navData) => navData.isActive ? 'active' : ''} to='signin' >Sign In</NavLink>}
        {userCtx.userName}
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
