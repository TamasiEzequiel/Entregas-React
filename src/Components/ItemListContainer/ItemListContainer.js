import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

    

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)


    //hook q retorna objetos con los param de la url, defino la estrucutra con parametros
    const { catId } = useParams()
   
    //condiciono a q muestre la 'categoria' q esta en la pagina

    useEffect( () => {
        setLoading(true)
        //pido y armo referencia

       const productosRef = collection(db, 'productos')
       const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
       
       getDocs(q)
           .then((resp) => {
               setProductos( resp.docs.map((doc) => {
                   return {
                       id: doc.id,
                       ...doc.data()
                   }
               }))
           })
           .finally(() => {
               setLoading(false)
           })

   }, [catId])


   return (
       <>
           {
               loading 
                   ? <h2>Cargando...</h2> 
                   : <ItemList productos={productos}/>
           } 
       </>
   )
}

