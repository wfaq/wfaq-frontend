import React from "react";
import "./App.css";
import "./components/Questoes";

import Questoes from "./components/Questoes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>wFaq</h1>
        <Questoes />
      </header>
    </div>
  );
}

export default App;
