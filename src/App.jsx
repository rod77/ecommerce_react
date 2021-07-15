import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent/NavBar"; 
import { ItemListContainer } from "./containers/ItemListContainer/ItemList";      
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetail";      
import {BrowserRouter, Switch,Route} from "react-router-dom"
import { CartComponent } from "./components/CartComponent/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBarComponent/>
          <Switch>
            <Route exact path="/"   component={ItemListContainer}/>  
            <Route exact path="/category/:idCategory"   component={ItemListContainer}/>   
            <Route path="/item/:idProducto"   component={ItemDetailContainer}/>             
            <Route exact path="/cart"   component={CartComponent}/>  
          </Switch>  
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
