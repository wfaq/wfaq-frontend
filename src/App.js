import React from "react";
import "./App.css";
import "./components/Questoes";


import Login from "./components/Login";
import Header from "./components/Header";
// import Questoes from './components/Questoes';
import Principal from './pages/principal/index';

function App() {
  return (
    // <div className="App">
    <>
       <Header />
        <Login />
    </>
    // </div>
  );
}



export default App;
