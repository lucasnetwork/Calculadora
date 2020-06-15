import React,{useEffect} from 'react'
import ShowOperationContent from './styles/ShowOperationContent'

const ShowOperation = ({currentValue,currentOperation,setCurrentOperation}) =>{
    useEffect(() =>{
        
    },[currentOperation])    
    return(
        <ShowOperationContent>
            <div>{currentValue}</div>
            <div>{currentOperation}</div>
        </ShowOperationContent>
    )
}

export default ShowOperation