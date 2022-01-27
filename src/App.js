import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import {MenuContenedor} from "./Components/MenuContenedor"


function App() {

  return (

    <MenuContenedor>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido al Shop de DecoDega" />
    </MenuContenedor>

  )


}

export default App;
