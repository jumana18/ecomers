import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './pages/HomePage.jsx'
import Contact from'./pages/ContactPage.jsx'
import About from './pages/AboutPage.jsx'
import SignUp from './pages/SignUpPage.jsx'
import Login from './pages/Login.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Wishlist from './pages/WishlistPage.jsx'
import CrdPage from './pages/CrdPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup/",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ErrorPage",
        element: <ErrorPage />,
      },
      {
        path: "/wishlisPage",
        element: <Wishlist/>
      },
      {
        path: "/CrdPage",
        element: <CrdPage/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
