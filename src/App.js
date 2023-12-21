

// import './App.css';


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

      <div className="App">
        <header className="App-header">

          <p>
            Front End React App
          </p>

        </header>

        <div>
          <RouterProvider router={routes} />

        </div>
      </div>
  )
}

export default App;