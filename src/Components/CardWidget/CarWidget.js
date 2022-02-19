import { useContext } from 'react'
import  {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
export const CartWidget = () => {

    const {cantidadCart,totalCart} = useContext(CartContext)

    return (
        <Link to="/cart" className='cart-widget'>
            <BsFillCartFill/>
            <span>{cantidadCart()}</span>
            <span> ${totalCart()}</span>
        </Link>
    )
}