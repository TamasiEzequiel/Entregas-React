import {Children, createContext, useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    
  const [cart,setCart] = useState([])

  const agregarAlCarrito = (item) => {
    
    setCart([...cart, item ])
  }

  //para buscar y comparar x id, si encuenrta lo retorna(find), si uso (some) retorna true o false--> con esto condiciono el agregado al carrito
  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id)
  } 

    const cantidadCart = () => {
      return cart.reduce((acc,prod) => acc + prod.cantidad, 0)
    }

    const totalCart = () => {
      return cart.reduce((acc,prod) => acc + prod.cantidad * prod.precio, 0)
    }
    const vaciarCart = () => {
      setCart([])
      
    }

    const eliminarItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }



    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            cantidadCart,
            totalCart,
            vaciarCart,
            eliminarItem

        }}>
            {children}
        </CartContext.Provider>
    )


}