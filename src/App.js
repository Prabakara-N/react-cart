import React from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
};

export default App;
