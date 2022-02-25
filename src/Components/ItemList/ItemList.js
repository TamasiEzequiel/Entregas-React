import { useEffect } from "react"
import { Contenedor } from "../../Contenedor/Contenedor"
import { Item } from "../Item/Item"


export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Productos</h2>   
            <hr/>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}