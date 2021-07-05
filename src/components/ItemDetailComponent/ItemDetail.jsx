import './style.css';
import { ItemCountComponent } from '../ItemCountComponent/ItemCount';

export const ItemDetailComponent = ({pictureURL, title, price, descripcion}) => { 
    const onAdd=(cantidad)=>{
        
        cantidad>0?alert(`Has agregado al carrito: ${cantidad} Unidades`):alert(`No puedes agregar 0 unidades`)
    }
    return (            
        <div className="idc_cuerpo">   
            <img className="idc_cuerpo_img" src={pictureURL} alt={title}/>
            <div className="idc_cuerpo_descripcion">
                    <h2 className="idc_title" >{title}</h2>
                    <h2 className="idc_precio">${price}</h2>
                    <h4 className="idc_descripcion">{descripcion}</h4>
                    <ItemCountComponent  stock={5} initial={1} onAdd={onAdd}/>
            </div> 
                        
           
        </div>
    );
}