import './style.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export const ItemCountComponent = ({stock, initial, onAdd}) => {
    const[cant, setCant] = useState(initial)
    console.log(cant)
    return (            
        <div className="Item">
            <div className="contador">
            <button onClick={()=>{setCant(cant<=0?cant-0:cant-1)}} className="contador__resta">-</button>
            <p className="contador__resultado"> {cant}</p>
            <button onClick={()=>{setCant(cant<stock?cant+1:cant+0)}} className="contador__suma">+</button>
            </div>
            <div className="item_add">
                <Button variant="outlined" color="primary">
                Agregar al Carrito
                </Button>
            </div>
        </div>
    );
}