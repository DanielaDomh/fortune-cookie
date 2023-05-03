import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"


export const ContainerInfo = ({quote, handleNewQuote}) => {
    
  
    return (
    <div className='containerInfo'>
        <div className='containerInfo_title'>Galleta de la Fortuna</div>
        <Button handleNewQuote ={handleNewQuote} />
        <div className='container_Phrase'>
        <p>{quote.phrase}</p>
        </div>
        <div className="containerInfo_autor">
        Fuente: {quote.author}

        </div>
    </div>
  )
}
