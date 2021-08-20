import { useState, useEffect } from "react";
import { performCalc } from "../Utils/helperFunctions";

const Buttons = ({
  liveDisplay,
  formulaDisplay,
  setLiveDisplay,
  setFormulaDisplay,
}) => {
  const [inputComplete, setInputComplete] = useState(false);
  const insertOperator = ({ target: { value } }) => {
    if (!inputComplete) {
      if (liveDisplay !== "") {
        setFormulaDisplay((currentFormula) => {
          if (value !== "=") {
            return currentFormula + liveDisplay + value;
          } else {
            setInputComplete(true);
            return currentFormula + liveDisplay;
          }
        });
        setLiveDisplay("");
      }
    }
  };

  const plusMinusToggle = () => {
    //if value is a minus sign and there are already numbers/decimal in string dont do any of this
    //or separate out
    if (liveDisplay === "-") {
      setLiveDisplay("");
    } else if (liveDisplay === "") {
      setLiveDisplay("-");
    }
  };

  const insertNum = ({ target: { value } }) => {
    if (!inputComplete) {
      setLiveDisplay((currentNum) => {
        return currentNum + value;
      });
    }
  };

  const finishCalc = () => {
    let answer = performCalc(formulaDisplay);
    //strip off 0000001
    setLiveDisplay(answer);
  };

  useEffect(() => {
    finishCalc();
  }, [inputComplete]);

  // useEffect(finishCalc(), [inputComplete])

  const clearDisplay = ({ target: { value } }) => {
    if (value === "AC" || inputComplete) {
      setFormulaDisplay("");
    }
    setLiveDisplay("");
    setInputComplete(false);
  };

  return (
    <div className="Buttons">
      <button onClick={clearDisplay} value="AC">
        AC
      </button>
      <button onClick={clearDisplay} value="C">
        C
      </button>
      <button onClick={plusMinusToggle} value="-">
        +/-
      </button>
      <button className="operator" onClick={insertOperator} value=" ÷ ">
        ÷
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
      <button onClick={insertNum} value=".">
        .
      </button>
      <button onClick={insertOperator} value="=">
        =
      </button>
    </div>
  );
};

export default Buttons;
