import "./Input.css";


//Defines the difference between the input text and the result 
const Input = ({ text, result }) => {
    return <div className="input-wrapper">
        <div className="result">
            <h1>{result}</h1>
        </div>
        <div className="text">
            <h1>{text}</h1>
        </div>
    </div>;
};

export default Input;