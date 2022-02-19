import {Link} from 'react-router-dom'
import { CartWidget } from '../CardWidget/CarWidget'

export const NavBar = () => {

    return (
        <header className="header">
            <Link to='/' style={{color: '#FFF'}}>
                <h1>DecoDega</h1>
            </Link>

            <nav className="header-nav">
                <Link to='/productos/hogar' className='header-link'>Hogar</Link>
                <Link to='/productos/comercio' className='header-link'>Comercio</Link>
                <Link to='/productos/jardin' className='header-link'>Jardin</Link>
                <CartWidget/>
            </nav>
        </header>
    )
}