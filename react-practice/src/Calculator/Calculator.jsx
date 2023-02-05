import React from "react"
import './Calculator.css'

const Calculator = () => {

    return <>
        <h1 className="calculator-heading">Calculator using React and CSS</h1>
        <div className="calculator-container">
            <div className="calculator-head">
                <input type="text" className="output-box" placeholder="0" disabled />
            </div>
            <div className="calculator-body">
                <div className="calculator-row">
                    <input type="button" id="clear-btn" value='AC' />
                    <input type="button" value='Del' />
                    <input type="button" value='%' />
                    <input type="button" value='/' />
                </div>
                <div className="calculator-row">
                    <input type="button" value='7' />
                    <input type="button" value='8' />
                    <input type="button" value='9' />
                    <input type="button" value='*' />
                </div>
                <div className="calculator-row">
                    <input type="button" value='4' />
                    <input type="button" value='5' />
                    <input type="button" value='6' />
                    <input type="button" value='-' />
                </div>
                <div className="calculator-row">
                    <input type="button" value='1' />
                    <input type="button" value='2' />
                    <input type="button" value='3' />
                    <input type="button" value='+' />
                </div>
                <div className="calculator-row">
                    <input type="button" value='0' />
                    <input type="button" value='.' />
                    <input type="button" id="equals-to-btn" value='=' />
                </div>
            </div>
        </div>
    </>
}

export default Calculator