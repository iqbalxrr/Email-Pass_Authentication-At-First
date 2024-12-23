import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Login from './assets/Login/Login';
import SingUp from './SingUp/SingUp';
import Home from './assets/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
          path:'/',
          element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    
      {
        path:'/singup',
        element:<SingUp></SingUp>
      },
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
