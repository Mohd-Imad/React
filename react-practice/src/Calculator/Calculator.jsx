import React, { useEffect, useState } from "react"
import './Calculator.css'

const Calculator = () => {

    const [input, setInput] = useState('')
    const [val, setVal] = useState(input)

    useEffect(()=>{
        setVal(...val,input)
    },[])

    let getInp = (inp)=>{
        setInput(inp)
    }


   


    return <>
        <h1 className="calculator-heading">Calculator using React and CSS</h1>
        <pre>{JSON.stringify(input)}</pre>
        <div className="calculator-container">
            <div className="calculator-head">
                <input type="text" className="output-box" placeholder="0" value={input} disabled />
            </div>
            <div className="calculator-body">
                <div className="calculator-row">
                    <input type="button" id="clear-btn" value='AC' />
                    <input type="button" value='Del' />
                    <input type="button" value='%' onClick={getInp.bind(this,'%')} />
                    <input type="button" value='/' onClick={getInp.bind(this,'/')} />
                </div>
                <div className="calculator-row">
                    <input type="button" value='7' onClick={getInp.bind(this,'7')} />
                    <input type="button" value='8' onClick={getInp.bind(this,'8')} />
                    <input type="button" value='9' onClick={getInp.bind(this,'9')} />
                    <input type="button" value='*' onClick={getInp.bind(this,'*')} />
                </div>
                <div className="calculator-row">
                    <input type="button" value='4' onClick={getInp.bind(this,'4')} />
                    <input type="button" value='5' onClick={getInp.bind(this,'5')} />
                    <input type="button" value='6' onClick={getInp.bind(this,'6')} />
                    <input type="button" value='-' onClick={getInp.bind(this,'-')} />
                </div>
                <div className="calculator-row">
                    <input type="button" value='1' onClick={getInp.bind(this,'1')} />
                    <input type="button" value='2' onClick={getInp.bind(this,'2')} />
                    <input type="button" value='3' onClick={getInp.bind(this,'3')} />
                    <input type="button" value='+' onClick={getInp.bind(this,'+')} />
                </div>
                <div className="calculator-row">
                    <input type="button" value='0' onClick={getInp.bind(this,'0')} />
                    <input type="button" value='.' onClick={getInp.bind(this,'.')} />
                    <input type="button" id="equals-to-btn" value='=' />
                </div>
            </div>
        </div>
    </>
}

export default Calculator