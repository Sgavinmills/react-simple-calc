import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import Header from "./Components/Header";

function App() {
  const [liveDisplay, setLiveDisplay] = useState('');
  const [formulaDisplay, setFormulaDisplay] = useState('');

  return (
    <div className="App">
      <Header />
      <Display liveDisplay={liveDisplay} formulaDisplay={formulaDisplay} />
      <Buttons liveDisplay={liveDisplay} formulaDisplay={formulaDisplay} setLiveDisplay={setLiveDisplay} setFormulaDisplay={setFormulaDisplay} />
    </div>
  );
}

export default App;
