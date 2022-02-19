
//FUNCION DE CONTADOR

// sin contar cantidad --> import { useState } from "react"

export const ItemCount = ({max, min = 0, counter,setCounter}) => {

    //estado
    //sin contar  cantidad --> const [counter, setCounter] = useState(0)


    const handleSumar = (e) => {
        //para frenar la propagacino del click
        e.stopPropagation()
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = (e) => {
        e.stopPropagation()
        counter > min && setCounter(counter - 1)
    }

    return (

        <div>
            <button className="btn btn- outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-primary"  onClick={handleSumar}>+</button>
        </div>

    )

}

// agrego el contador al ItemDetail 
//declaro de un evento: declaro la funcion y luego paso la referencia al atributo q quiero, utilizo el atributo handle
// PASAR LA REFERENCIA{handleClick}, NO LA FUNCION {handleClick()}