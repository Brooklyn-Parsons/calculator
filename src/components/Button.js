import "./Button.css";

//handels eventlisteners for all the buttons
const Button = ({ symbol, color, handleClick }) => {
    return <div 
    onClick={() => handleClick(symbol)}
    className="button-wrapper" 
    style={{ backgroundColor: color }}
    >{symbol}
    </div>;
};

export default Button;