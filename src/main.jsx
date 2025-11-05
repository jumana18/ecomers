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
import WishlisTPage from './pages/Wishlist.jsx'
import CartPage from './pages/CartPage.jsx'
import MyAccount from './pages/MyAccount.jsx'
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
        path: "/WishlisTPage",
        element: <WishlisTPage />,
      },
      {
        path: "/CartPage",
        element: <CartPage />,
      },
      {
        path: "/MyAccount",
        element: <MyAccount/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
