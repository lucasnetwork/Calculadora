import React from 'react'
import ShowOperationContent from './styles/ShowOperationContent'

const ShowOperation = ({currentValue,currentOperation}) =>{
    return(
        <ShowOperationContent>
            <div>{currentValue}</div>
            <div>{currentOperation}</div>
        </ShowOperationContent>
    )
}

export default ShowOperation