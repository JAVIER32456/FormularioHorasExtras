import React from 'react'
import './alert.css';

const Alert = () => {
  return (
    <div className='alert'>
        <div className='alert-container'>
            <h2 className='alert-titulo'>datos por enviar</h2>
            <Button>Aceptar</Button>
            <Button variant='outline'>Cerrar</Button>
        </div>
    </div>
  )
}

export default Alert