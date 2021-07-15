import './style.css';
import { CartContext } from '../../context/CartContext';
import { useContext ,useEffect} from 'react'; 
import {NavLink} from 'react-router-dom'
export const CartComponent = () => {
 
    
    const context = useContext(CartContext);
    const cartVacio = `<p>No hay productos en el carrito.</p>`
    
  return (
        <div> 
            <h1>Felicitaciones Finalizaste la Compra 😎</h1>
            <div className={context.cart.length===0?"cartVacio":"oculto"}>
                <h3>El carrito esta vacio</h3>  
                <NavLink to={`/`} className="volver">
                    <h2>Volver Al inicio</h2>
                </NavLink>
            </div>
            <ul className={context.cart.length!==0?"cart":"oculto"}>
            {context.cart.map(element => {
                return(
                <div>
                    <li key={element.item.id} className="cart__item">
                        <img src={element.item.pictureURL} alt={element.item.title} className="cart__item__img" />
                        <div className="cart__item__desc">
                            <h3 className="cart__item__title">{element.item.title}</h3>
                            <p className="cart__item__cant"> Cantidad: {element.quantity}</p>
                            <p className="cart__item__price"> Precio por Unidad: {element.item.price} $</p>
                            <p className="cart__item__totalPrice"> Precio total: {element.item.price*element.quantity} $</p>
                            <button onClick={() => {context.removeItem(element.item.id)}}>🗑️</button>
                        </div>
                    </li>                
                </div>)})}
            </ul>
            
            

        </div>
    );
}