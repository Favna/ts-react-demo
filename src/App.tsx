import React from "react";
import "./App.scss";
import Header from "./Header";
import Component from "./Component";

const App = () => {
  return (
    <div className="App">
      <Component />
      <Header userName="Bob" />
    </div>
  );
};

export default App;
