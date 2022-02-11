import {Link} from 'react-router-dom'

export const NavBar = () => {

    return (
        <header className="header">
            <Link to='' style={{color: '#FFF'}}>
                <h1>DecoDega</h1>
            </Link>

            <nav className="header-nav">
                <Link to='' className='header-link'>Hogar</Link>
                <Link to='' className='header-link'>Comercio</Link>
                <Link to='' className='header-link'>Contacto</Link>
            </nav>
        </header>
    )
}