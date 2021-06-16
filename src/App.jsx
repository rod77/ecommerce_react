import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent/NavBar"; 
import { ItemListContainer } from "./components/ItemListContainer/ItemList"; 

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>

        <NavBarComponent/>
        
        <ItemListContainer title={"Título provisional :)"}/>

    </div>
  );
}

export default App;
