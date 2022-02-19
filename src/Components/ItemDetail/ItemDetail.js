//detalle de producto para filtrar luego al entrar al prod

import { ItemCount } from "../ItemCount/ItemCount"

import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"


export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    //creo estado dentro del contenedor para sumar la cantidad

    const [cantidad, setCantidad] = useState(0)

    const {cart, agregarAlCarrito, isInCart} = useContext(CartContext)


    const handleAgregar = () =>{

        if(cantidad === 0) return

        if(!isInCart(id)){

        const addItem = {
            id,nombre,precio,stock, cantidad
        }
        
            agregarAlCarrito(addItem)
        }
    }


    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>

            {
                isInCart(id)
                ? 
                    <Link to="/cart" className="btn  btn-succes my-3">
                        Terminar mi compra 
                    </Link>
                :
            
                <> 

                    <ItemCount 
                    max = {stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                />  
            
                <button
                className="btn btn-succes my-2"
                onClick={handleAgregar}
                >
                Agregar al carro
                </button>
            </> 
        }
        </div>
    )
}
//si quiero establecer un minimo de 5 x ejmplo, se lo agrego a la funcion itemcount dentro de las { min={5}}