import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { LandlordDashBoard } from './landlordDashboard/landlordDashboard';
import { PostHostel } from './postHostel/postHostel';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/landlord/dashboard',
      element: <LandlordDashBoard />,
    },
    {
      path:'/hostel/post',
      element:<PostHostel/>
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
