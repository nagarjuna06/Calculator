import './index.css'
const Keypad = props => {
    const { clickedBtn, equalBtn, clear } = props
    return (
        <div className="key-pad">
            <div>
                <button onClick={() => clickedBtn("9")} className="digit-key">9</button>
                <button onClick={() => clickedBtn("8")} className="digit-key">8</button>
                <button onClick={() => clickedBtn("7")} className="digit-key">7</button>
                <button onClick={() => clickedBtn("/")} className="operator-key">/</button>
            </div>
            <div>
                <button onClick={() => clickedBtn("6")} className="digit-key">6</button>
                <button onClick={() => clickedBtn("5")} className="digit-key">5</button>
                <button onClick={() => clickedBtn("4")} className="digit-key">4</button>
                <button onClick={() => clickedBtn("*")} className="operator-key">*</button>
            </div>
            <div>
                <button onClick={() => clickedBtn("3")} className="digit-key">3</button>
                <button onClick={() => clickedBtn("2")} className="digit-key">2</button>
                <button onClick={() => clickedBtn("1")} className="digit-key">1</button>
                <button onClick={() => clickedBtn("-")} className="operator-key">-</button>
            </div>
            <div>
                <button onClick={() => clickedBtn("0")} className="digit-key">0</button>
                <button onClick={() => clear()} className="digit-key">C</button>
                <button onClick={() => equalBtn()} className="digit-key">=</button>
                <button onClick={() => clickedBtn("+")} className="operator-key">+</button>
            </div>
        </div>
    )
}
export default Keypad