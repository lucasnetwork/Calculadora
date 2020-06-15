import React,{useEffect} from 'react'
import Button from './styles/Button'

const numbers = ['7','8','9','4','5','6','1','2','3','0',',','=']

const Buttons = ({currentValue,setCurrentValue,setCurrentOperation,previousValue,currentOperation,setPreviousValue}) =>{
    function sumValues(){
        switch(currentOperation){
            case "+":
                setCurrentValue(Number(previousValue) + Number(currentValue) )
                break
            case "-":
                setCurrentValue(Number(previousValue) - Number(currentValue) )
                break
            case "*":
                setCurrentValue(Number(previousValue) * Number(currentValue) )
                break
            case "/":
                setCurrentValue(Number(previousValue) / Number(currentValue) )
                break
            default:
                break
        }
    }
    function handlerSetValue(e){
        if(e.target.value === "="){
            sumValues()
        }else if(currentOperation){
            setPreviousValue(currentValue)
            setCurrentValue(e.target.value)
        }
        else{
            setCurrentValue(e.target.value)
        }
    }
    function handlerSetOperation(e){
        sumValues()
        setCurrentOperation(e.target.value)
    }
    return (
        <>
            <div>
                {numbers.map(number =>(
                    <Button className="number" value={number} onClick={handlerSetValue}>{number} </Button>
                ))}
            </div>
            <div>
                <Button className="arit" value="x" onClick={handlerSetOperation}>a</Button>
                <Button className="arit" value="/" onClick={handlerSetOperation}>/</Button>
                <Button className="arit" value="*" onClick={handlerSetOperation}>*</Button>
                <Button className="arit" value="-" onClick={handlerSetOperation}>-</Button>
                <Button className="arit" value="+" onClick={handlerSetOperation}>+</Button>
            </div>
        </>
    )
}

export default Buttons