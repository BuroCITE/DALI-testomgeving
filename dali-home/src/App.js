import './css/App.scss';
import { renderHome, renderInlog } from '.';
import { Route, Routes } from 'react-router-dom';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='login' element={<Login/>} />
    </Routes>
  </>);
}

export default App;
