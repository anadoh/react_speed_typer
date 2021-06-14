import React, {useState} from "react";
import "./App.css";
import ButtonSettings from "./components/ButtonSettings.js";
import Settings from "./components/Settings.js";
import MainContainer from "./components/MainContainer.js"

function App() {


  return (<>
      <ButtonSettings />
      <Settings />
      <MainContainer />
  </>);
}

export default App;
