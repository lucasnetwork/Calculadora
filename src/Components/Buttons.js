import React,{useEffect} from 'react'
import {FiDelete,FiMinus} from 'react-icons/fi'
import {RiDivideLine} from 'react-icons/ri'
import {TiTimes} from 'react-icons/ti'
import {GoPlus} from 'react-icons/go'
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
    function clearNumberCurrent(){
        setCurrentValue("0")
    }
    function clearAll(){

    }
    return (
        <>
            <div>
                {numbers.map(number =>(
                    <Button className="number" value={number} onClick={handlerSetValue}>{number} </Button>
                ))}
            </div>
            <div className="arit">
                <Button className="arit"  onClick={clearNumberCurrent}><FiDelete/></Button>
                <Button className="arit" value="/" onClick={handlerSetOperation}><RiDivideLine/></Button>
                <Button className="arit" value="*" onClick={handlerSetOperation}><TiTimes/></Button>
                <Button className="arit" value="-" onClick={handlerSetOperation}><FiMinus/></Button>
                <Button className="arit" value="+" onClick={handlerSetOperation}><GoPlus/></Button>
            </div>
        </>
    )
}

export default Buttons