import React from 'react';
import '../../../css/POS/POS_Calculator.css';
import { calcIcons } from '../../database'

const POS_Calculator = () => {

  return (
    <>
      <div className="posMainContainer">
        <div className="posCalcContainer">
          <div className="calculatorDiv" id="leftDiv">
            <p>Calculator</p>
            <div className="leftBtnContainer">
              <button className="calculatorButton">$</button>
              <button className="calculatorButton">
                <img src={calcIcons[0].image} alt={calcIcons[0].alt} />
              </button>
              <button className="calculatorButton">
                <img src={calcIcons[1].image} alt={calcIcons[1].alt} />
              </button>
              <button className="calculatorButton">
                <img src={calcIcons[2].image} alt={calcIcons[2].alt} />
              </button>
              <button className="calculatorButton"><p>( x + y  )</p></button>
              <button className="calculatorButton">
                <img src={calcIcons[3].image} alt={calcIcons[3].alt} />
              </button>
            </div>
            <div className="leftButtons">

            </div>
          </div>
          <div className="calculatorDiv" id="rightDiv">
            <p id="sumContainer">167 + 89 = <strong>256</strong></p>
            <div className="rightBtnContainer">
              <button className="calculatorButton">AC</button>
              <button className="calculatorButton">[+/-]</button>
              <button className="calculatorButton">%</button>
              <button className="calculatorButton">÷</button>
              <button className="calculatorButton">7</button>
              <button className="calculatorButton">8</button>
              <button className="calculatorButton">9</button>
              <button className="calculatorButton">X</button>
              <button className="calculatorButton">4</button>
              <button className="calculatorButton">5</button>
              <button className="calculatorButton">6</button>
              <button className="calculatorButton">-</button>
              <button className="calculatorButton">1</button>
              <button className="calculatorButton">2</button>
              <button className="calculatorButton">3</button>
              <button className="calculatorButton">+</button>
              <button className="calculatorButton">C</button>
              <button className="calculatorButton">0</button>
              <button className="calculatorButton">.</button>
              <button className="calculatorButton">=</button>
            </div>
          </div>


        </div>
      </div>
    </>
  )

};

export default POS_Calculator;