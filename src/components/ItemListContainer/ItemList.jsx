import { ItemCountComponent } from '../ItemCountComponent/ItemCount';
import './style.css';


export const ItemListContainer = ({title}) => {

    const onAdd=(cantidad)=>{
        
        cantidad>0?alert(`Has agregado al carrito: ${cantidad} Unidades`):alert(`No puedes agregar 0 unidades`)
    }

    return (
        <div className="unItem">
            
            <p className="title_Item">{title}</p>
            <ItemCountComponent  stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}
