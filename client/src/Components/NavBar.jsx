import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <header>
        <h1>Wally's barbershop</h1>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/admin">Admin</Link>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
