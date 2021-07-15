import './style.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import {  useState } from "react";

export const CartWidgetComponent = () => {
    const context = useContext(CartContext);

    return (            
        <div className="widgetCart">
        <div className="widgetCart__icon"><ShoppingCartIcon /></div>
        <p  className={context.cantTotal()!==0?"contador":"oculto"}>{context.cantTotal()}</p>
        </div>
    );
}