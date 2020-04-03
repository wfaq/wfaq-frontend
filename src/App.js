import React from "react";
import "./App.css";
import "./components/Questoes";



import Header from "./components/Header";
// import Questoes from './components/Questoes';
import Routes from "./routes/routes";

function App() {
  return (
    // <div className="App">
    <>
       <Header />
        <Routes/>
    </>
    // </div>
  );
}



export default App;
