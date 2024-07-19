import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Staff from "./Pages/Staff";
import Services from "./Pages/Services";
import Bookings from "./Pages/Bookings";
import Admin from "./Pages/Admin";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar /> {/*  this will display on all pages */}
        <Routes>
          {" "}
          {/* this Routes tag used to be called switch. You might see it in old code.*/}
          <Route
            path="/"
            element={<Home />} /* When users visit "/" display the homepage*/
          />
          <Route
            path="/staff"
            element={<Staff />} /* When users visit "/" display the homepage*/
          />
          <Route
            path="/services"
            element={
              <Services />
            } /* When users visit "/" display the homepage*/
          />
          <Route
            path="/booking"
            element={
              <Bookings />
            } /* When users visit "/" display the homepage*/
          />
          <Route
            path="/admin"
            element={<Admin />} /* When users visit "/" display the homepage*/
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
