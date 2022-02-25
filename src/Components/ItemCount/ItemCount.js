import { configBtns } from "./configBtns"

//FUNCION DE CONTADOR

// sin contar cantidad --> import { useState } from "react"

export const ItemCount = ({max, min = 0, counter,setCounter}) => {

    //estado
    //sin contar  cantidad --> const [counter, setCounter] = useState(0)


    const handleSumar = (e) => {
        
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    const {configRestar, configSumar} = configBtns(counter, max, min, handleRestar, handleSumar)


    return (
        <div>
            <button {...configRestar}>
                -
            </button>
            <span className="mx-3">{counter}</span>
            <button {...configSumar}>
                +
            </button>
        </div>
    )
}





// agrego el contador al ItemDetail 
//declaro de un evento: declaro la funcion y luego paso la referencia al atributo q quiero, utilizo el atributo handle
// PASAR LA REFERENCIA{handleClick}, NO LA FUNCION {handleClick()}




   

  


 