import React from 'react'
import { useState } from 'react'

function Empleado() {
    // Declaramos las variables con estado
    //Nombre de la variable y método que la modifica
    const [nombre, setnombre] = useState("");
    const [apellido, setapellido] = useState("");    
    const [iniciales, setiniciales] = useState("");

    //Visualizamos las iniciales
    //PreventDefault impide que el formulario se renderize de nuevo
    const mostrarIniciales = (e) => {
        e.preventDefault();
        setiniciales(`${nombre[0]}.${apellido[0]}`.toUpperCase())
    }

  return (
    <form onSubmit={mostrarIniciales}>
        <p>Nombre: </p>
        {/* en cada evento llamamos a la función que cambia el estado de la variable */ }
        <input name="nombre" type="text" value={nombre} onChange={(e) => setnombre(e.target.value)}></input>
        <p>Apellido: </p>        
        <input name="apellido" type="text" value={apellido} onChange={(e) => setapellido(e.target.value)}></input>           
        
        <p>Iniciales: {iniciales}</p>
        <button type="submit"> Enviar</button>        
    </form>
  )
}

export default Empleado