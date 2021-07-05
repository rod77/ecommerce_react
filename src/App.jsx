import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent/NavBar"; 
import { ItemListContainer } from "./containers/ItemListContainer/ItemList";      
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetail";      
import {BrowserRouter, Switch,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarComponent/>
        <Switch>
          <Route exact path="/"   component={ItemListContainer}/>  
          <Route exact path="/category/:idCategory"   component={ItemListContainer}/>   
          <Route  path="/item/:idProducto"   component={ItemDetailContainer}/>             
 
          
        </Switch>  
      </BrowserRouter>

    </div>
  );
}

export default App;
