const Buttons = ({ liveDisplay, formulaDisplay, setLiveDisplay, setFormulaDisplay }) => {


  const insertOperator = ({ target: { value } }) => {
    setFormulaDisplay((currentFormula) => {
      return currentFormula + liveDisplay + value;
    });
    setLiveDisplay("");
  };

  const insertNum = ({ target: { value } }) => {
    setLiveDisplay((currentNum) => {
      return currentNum + value;
    });
  };

  const clearDisplay = ({ target: { value } }) => {
    if (value === "AC") {
      setFormulaDisplay("");
    }
    setLiveDisplay("");
  };

  const performCalc = () => {

  }

  return (
    <div className="Buttons">
      <button onClick={clearDisplay} value="AC">
        AC
      </button>
      <button onClick={clearDisplay} value="C">
        C
      </button>
      <button>+/-</button>
      <button className="operator" onClick={insertOperator} value=" / ">
        /
      </button>
      <button className="numButton" onClick={insertNum} value="7">
        7
      </button>
      <button className="numButton" onClick={insertNum} value="8">
        8
      </button>
      <button className="numButton" onClick={insertNum} value="9">
        9
      </button>
      <button className="operator" onClick={insertOperator} value=" x ">
        *
      </button>
      <button className="numButton" onClick={insertNum} value="4">
        4
      </button>
      <button className="numButton" onClick={insertNum} value="5">
        5
      </button>
      <button className="numButton" onClick={insertNum} value="6">
        6
      </button>
      <button className="operator" onClick={insertOperator} value=" - ">
        -
      </button>
      <button className="numButton" onClick={insertNum} value="1">
        1
      </button>
      <button className="numButton" onClick={insertNum} value="2">
        2
      </button>
      <button className="numButton" onClick={insertNum} value="3">
        3
      </button>
      <button className="operator" onClick={insertOperator} value=" + ">
        +
      </button>
      <button className="numButton" onClick={insertNum} value="0">
        0
      </button>
      <button>%</button>
      <button>.</button>
      <button onClick={() => performCalc(formulaDisplay)}>=</button>
    </div>
  );
};

export default Buttons;
