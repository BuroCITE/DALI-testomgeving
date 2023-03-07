import './css/App.scss';
import { Routes, Route} from 'react-router-dom';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';
import { Bronverwijzingen } from './js/pages/bronverwijzingen.js';
import { ProtectedLayout } from './js/auth/protectedLayout';
import { UnProtectedLayout } from './js/auth/unProtectedLayout';


function App() {
   return ( 
    <Routes>
      <Route element={<ProtectedLayout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/bronverwijzingen" element={<Bronverwijzingen/>}/>
      </Route>

      <Route path="/dashboard" element={<UnProtectedLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
    );
}

export default App;
