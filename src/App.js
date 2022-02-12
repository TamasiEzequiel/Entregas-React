import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

    return (
        <BrowserRouter>

          <NavBar/>
          
          <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>

          
        </BrowserRouter>
    )
}

export default App;

//en el PATH defino pasando un paramtero
// despues con el link le indico la url donde ir
// en el "ItemListContainer"  capturo ese parametro con el "usaeParams"