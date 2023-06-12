import React from 'react'

function Coche(props) {
  return (
    <div>
        <h3>Detalles del coche</h3>
        <h4>Matricula: { props.matricula }</h4>
        <h4>Precio: { props.precio }</h4>
    </div>
  )
}

export default Coche