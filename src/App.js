import React from "react";
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Register from "./components/Register";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} /> {/* Render Home component */}
        <Route exact path="/" component={Register} /> 
        <Route path="/register-form" component={RegisterForm} />
        <Redirect to="/" />
        <Route render={({ location }) => (
          !location.pathname.startsWith("/register-form") && (
            <>
              <Services />
              <Payment />
              <Footer />
            </>
          )
        )}/>
      
      </div>
    </Router>
  );
}

export default App;
