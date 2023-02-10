import './css/App.scss';
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer} from 'react-router-dom';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';
import { ProtectedLayout } from './js/auth/protectedLayout';
import { AuthProvider } from "./js/auth/useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
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
      <Route element={<AuthLayout />}
      >
          <Route path="/" element={<ProtectedLayout>
            <Home/>
            </ProtectedLayout>
            }>
          </Route>
      </Route>
    )
  );

function App() {
   return ( router );
}

export default App;
