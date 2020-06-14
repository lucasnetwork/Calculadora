import React,{useEffect} from 'react'
import Button from './styles/Button'

const numbers = ['7','8','9','4','5','6','1','2','3','0',',','=']

const Buttons = () =>{
    return (
        <>
            <div>
                {numbers.map(number =>(
                    <Button className="number" value={number}>{number}</Button>
                ))}
            </div>
            <div>
                <Button className="arit">a</Button>
                <Button className="arit">/</Button>
                <Button className="arit">*</Button>
                <Button className="arit">-</Button>
                <Button className="arit">+</Button>
            </div>
        </>
    )
}

export default Buttons