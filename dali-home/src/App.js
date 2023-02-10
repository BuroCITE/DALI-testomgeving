import './css/App.scss';
import { useState } from "react";
import { renderHome, renderInlog } from '.';
import { Route, Routes } from 'react-router-dom';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
 
  const login = (e) => {
    e.preventDefault();
    console.log(username, password);
    const userData = {
      username,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
    setUsername('');
    setPassword('');
  };
 
  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };
 
  return (<>
    <Routes>
    {!isLoggedin ? <Route path='login' element={<Login/>} /> : <Route path='/' element={<Home/>} />}
      <Route path='/' element={<Home/>} />
      <Route exact path='login' element={<Login/>} />
    </Routes>
  </>);
}

export default App;
