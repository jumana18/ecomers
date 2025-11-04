import { useState } from "react";
import Header from "./compents/Header";
import Footer from "./compents/Footer";
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <Header />
      <Outlet />
     <Footer />
    
    </>
  );
}

export default App;
