import React from 'react'

// destructuracion de Props: entre llaves va cada propiedad
function Salario({salario_total, impuestos}) {
    // inicializar resultado
    let resultado = 0;

    //Funcion resultado
    function calcularSalario(evento) {
        console.log(evento);
        resultado = (salario_total - (salario_total * impuestos/100));
        document.getElementById("resultado").innerHTML=resultado
    }

  return (
    <div>
        { /* Imprimir resultados */}
        <p>Salario total: {salario_total}</p>
        <p>Impuestos: {impuestos}</p>
        <p id="resultado"> Resultado </p>

        { /* Calcular Salario 
        Nota: en javascript clásico sería: onClick="calcularSalario" 
        en react se envuelve el evento js con (e)=> */ }

        <button onClick={(e)=>calcularSalario(e)}>Calcular Salario</button>
    </div>
  )
}

export default Salario