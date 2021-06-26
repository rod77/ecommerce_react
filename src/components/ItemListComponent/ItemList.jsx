import './style.css'; 
import { ItemComponent } from "../ItemComponent/Item"; 

export const ItemListComponent = ({productos}) => {

    return (            
        <div className="itemList">
            {productos.map(product => <ItemComponent key={product.id} title={product.title} price={product.price} pictureURL={product.pictureURL} descrip={product.descripcion}/>)}
        </div>
    );
}