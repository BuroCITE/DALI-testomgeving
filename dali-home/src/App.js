import './css/App.scss';
import { Routes, Route} from 'react-router-dom';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';
import { Bronverwijzingen } from './js/pages/bronverwijzingen.js';
import { Handboek } from './js/pages/handboek.js';
import { ProtectedLayout } from './js/auth/protectedLayout';
import { UnProtectedLayout } from './js/auth/unProtectedLayout';
import { Bijlagen } from './js/pages/bijlagen';
import { Pve } from './js/pages/pve';


function App() {
   return ( 
    <Routes>
      <Route element={<ProtectedLayout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/handboek" element={<Handboek/>}/>
        <Route path="/bronverwijzingen" element={<Bronverwijzingen/>}/>
        <Route path="/bijlagen" element={<Bijlagen/>}/>
        <Route path="/programmaVanEisen" element={<Pve/>}/>
      </Route>

      <Route path="/dashboard" element={<UnProtectedLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
    );
}

export default App;
