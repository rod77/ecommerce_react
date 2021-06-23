
import { ItemListComponent } from "../ItemListComponent/ItemList"; 
import './style.css';


export const ItemListContainer = ({title}) => {

   

    return (
        <div className="unItem">
            
            <p className="title_Item">{title}</p> 
            <ItemListComponent />
        </div>
    )
}
