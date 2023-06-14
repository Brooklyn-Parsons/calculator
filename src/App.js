import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import Input from "./components/numberInput";
import Button from "./components/Button";

//Uses the state to run the app and gives room for functionallity 
const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  //Takes the current input and calculates the result
  const calculateResult = () => {
    const Input = text.join("");
    setResult(evaluate(Input));
  };

  //When the clear button is hit, the display box emptys
  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  //all the buttons on the calculator
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="row">
        <Button symbol="7" handleClick={addToText} />
        <Button symbol="8" handleClick={addToText} />
        <Button symbol="9" handleClick={addToText} />
        <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>        
        <div className="row">
        <Button symbol="4" handleClick={addToText} />
        <Button symbol="5" handleClick={addToText} />
        <Button symbol="6" handleClick={addToText} />
        <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>       
         <div className="row">
        <Button symbol="1" handleClick={addToText} />
        <Button symbol="2" handleClick={addToText} />
        <Button symbol="3" handleClick={addToText} />
        <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>        
        <div className="row">
        <Button symbol="0" handleClick={addToText} />
        <Button symbol="." color={buttonColor}  handleClick={addToText} />
        <Button symbol="=" color={buttonColor} handleClick={calculateResult} />
        <Button symbol="-" color={buttonColor}  handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="grey" handleClick={resetInput} />
      </div>
    </div>
  )
};

export default App;
