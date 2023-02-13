import './css/App.scss';
import { Routes, Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer} from 'react-router-dom';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';
import { ProtectedLayout } from './js/auth/protectedLayout';
import { AuthProvider } from "./js/auth/useAuth";

export const AuthLayout = () => {
  // const outlet = useOutlet();

  return 
  // (
    // <AuthProvider>{outlet}</AuthProvider>
  // );
};

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );


  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
      >
          <Route path="/" element={
            <Home/>
            }>
          </Route>
      </Route>
    )
  );

function App() {
   return ( 
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="login" element={<Login/>}></Route>

    </Routes>
    );
}

export default App;
