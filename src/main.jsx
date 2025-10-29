import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/Home.jsx'
import Contact from'./pages/Contact.jsx'
import About from './pages/About.jsx'
import SignUp from './pages/SignUp.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/signup/',
        element:<SignUp/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
