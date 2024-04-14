import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Register from "./components/Register";
import Payment from "./components/Payment";
// import RegisterForm from "./components/RegisterForm"

function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Register />
        <Services />
        <Payment />
        {/* <RegisterForm/> */}
      </div>
    </Router>
  );
}

export default App;
