import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { LandlordDashBoard } from './landlordDashboard/landlordDashboard';
import { PostHostel } from './postHostel/postHostel';
import { ViewHostel } from './viewHostels/viewHostels';
import NavBarMain from './components/navbar/NavBarMain';
import Home from './landingPage/Home';
import BoxInWords from "./boxInWords/boxinwords"
import Footer from './footer/Footer'

function App() {

  const Layout = ()=>{

    return(
      <div>
        <NavBarMain />
        <Home/>
        <BoxInWords/>
        <Footer/>
      </div>
    )
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />
    },

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
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
