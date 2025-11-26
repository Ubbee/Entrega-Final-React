import React, { useState } from 'react'
export default function Contador( {handleEjemplo, stock} ) {


    const [contador, setContador] = useState(1);

    function HandleSumar() {
        if (contador < stock) {
            const sumar = contador + 1;
            setContador(sumar)
            handleEjemplo(sumar)
        }
    }
    function HandleRestar() {
        if (contador > 1) {
            const restar = contador - 1;
            setContador(restar)
            handleEjemplo(restar)
        }
    }   

    return (
        <div>
            <p>Contador: ${contador}</p>
            <button onClick={HandleSumar}>+</button>
            <button onClick={HandleRestar}>-</button>
        </div>
    )
}
