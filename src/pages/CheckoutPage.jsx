import React from "react";
import { Link } from "react-router-dom";
import BillingForm from "../compents/Checkout/BillingForm";

const CheckoutBreadcrumb = () => {
  return (
    <>
    <div className="mb-8 md:mb-12 max-w-6xl mx-auto px-4 py-4 mt-10">
      <nav
        className="text-sm sm:text-base text-gray-500 flex flex-wrap items-center gap-1 sm:gap-2"
        aria-label="Breadcrumb"
      >
        <Link to="/" className="hover:text-black transition">
          Account
        </Link>
        <span>/</span>

        <Link to="/MyAccount" className="hover:text-black transition">
          My Account
        </Link>
        <span>/</span>

        <Link to="/" className="hover:text-black transition">
          Product
        </Link>
        <span>/</span>

        <Link to="/CartPage" className="hover:text-black transition">
          View Cart
        </Link>
        <span>/</span>

        <span className="text-black font-medium">Checkout</span>
      </nav>
    </div>
    <BillingForm/>
    
   </>
  );
};

export default CheckoutBreadcrumb;
