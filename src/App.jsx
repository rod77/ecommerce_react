import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent/NavBar"; 
import { ItemListContainer } from "./containers/ItemListContainer/ItemList";      


function App() {
  return (
    <div>

        <NavBarComponent/>
        
        <ItemListContainer title={"Productos"}/> 
 
  

    </div>
  );
}

export default App;
