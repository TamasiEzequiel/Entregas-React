import './NavBar.css'


export const NavBar = ({ nav }) => {

    return (
       <header className="header">

        <h1>
           DecoDega
        </h1>

        <nav className="header-nav">
            <p className="link">Hogar </p>
            <p className="link">Comercio </p>
            <p className="link">Arte </p>
        </nav>


       </header>
        
    )
};