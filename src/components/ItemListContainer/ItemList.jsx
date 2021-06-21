import { ItemCountComponent } from '../ItemCountComponent/ItemCount';
import './style.css';


export const ItemListContainer = ({title}) => {
    return (
        <div className="unItem">
            
            <p className="title_Item">{title}</p>
            <ItemCountComponent  stock={5} initial={1} />
        </div>
    )
}
