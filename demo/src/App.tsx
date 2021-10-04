import React from "react";
import logo from "./logo.svg";
import HandleA11Y from "react-a11y";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HandleA11Y actAs="button">
          <button onClick={() => console.log("clicked!")}>click me</button>
        </HandleA11Y>
      </header>
    </div>
  );
}

export default App;
