import { collection,writeBatch, addDoc, Timestamp, updateDoc, doc, getDoc, query, where, documentId, getDocs} from "firebase/firestore"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"





export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)
    
    const [orderId,setOrderId] = useState(null)


    const generarOrden = async () => {
        const orden= {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())  //crea fecha y hora con tipo de dato para guardar en la coleccion
        }

        //envio a firebase, armado de referencia
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection (db, "productos")

        const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id))) 

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((el) => el.id === doc.id)
            
            if (doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else{
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0){
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    vaciarCart()
                })

        } else{
            alert("Items sin stock")
        }

    }   
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre > 0 && values.nombre.length < 5){
            alert ("Por favor coloque un nombre valido")
            return
        }
        
        if (values.email.length < 5){
            alert ("Por favor coloque un mail valido")
            return
        }
        
      
        generarOrden()        

    }

    if (orderId) {
        return (
            <>
            <div>
             <h2>Gracias por tu compra</h2>
                
             <h3>Tu orden es la numero: {orderId} </h3>
                <Link to= "/" className= "btn btn-primary"> Volver</Link>
            </div>  
            
            </>
        )
    }


    if(cart.lenght === 0){
        return <Navigate to="/" />
    }
    


    return (

        <div className="container my-5">
            <h2>Final de compra</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type= 'text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name= 'nombre'                
                />

                <input 
                className="form-control my-2"
                type='email'
                placeholder="Tu email"
                value={values.email}
                onChange={handleInputChange}
                name='email'
                /> 

                <input 
                className="form-control my-2"
                type='tel'
                placeholder="Tu telefono"
                value={values.tel}
                onChange={handleInputChange}
                name='tel'
                />               
            
                <button type="submit" className="btn btn-primary"> Enviar</button>


            </form>

        </div>

        
    )

}


