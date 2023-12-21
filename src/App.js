import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
