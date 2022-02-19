import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


 
export const ItemListContainer = () => {

    

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)


    //hook q retorna objetos con los param de la url, defino la estrucutra con parametros
    const { catId } = useParams()
   
    //condiciono a q muestre la 'categoria' q esta en la pagina

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (catId) {
                    setProductos( res.filter((el) => el.categoria === catId ) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando..</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}