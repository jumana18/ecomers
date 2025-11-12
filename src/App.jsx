import { useState } from "react";
import Header from "./compents/Header";
import Footer from "./compents/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick 
       rtl = {false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
