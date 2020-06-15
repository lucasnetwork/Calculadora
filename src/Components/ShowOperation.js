import React,{useEffect} from 'react'

const ShowOperation = ({currentValue,currentOperation,setCurrentOperation}) =>{
    useEffect(() =>{
        
    },[currentOperation])    
    return(
        <>
            <div>{currentValue}</div>
            <div>{currentOperation}</div>
        </>
    )
}

export default ShowOperation