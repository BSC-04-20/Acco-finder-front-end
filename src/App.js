import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { LandlordDashBoard } from './landlordDashboard/landlordDashboard';
import { PostHostel } from './postHostel/postHostel';
import { ViewHostel } from './viewHostels/viewHostels';
import { BookHostel } from './bookingPage/bookPage';

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
    },
    {
      path: '/hostels/view',
      element:<ViewHostel/>
    },
    {
      path:'/hostel/book',
      element:<BookHostel/>
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
