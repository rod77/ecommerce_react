import './style.css'; 
import { ItemComponent } from "../ItemComponent/Item"; 

export const ItemListComponent = () => {

    const productos = [
        {
            id: 1,
            title:"Remera River Titular",
            price: 6999,
            pictureURL:"/img/producto1.jpg",
            descripcion: "Camiseta De River Adidas Oficial Blanca"
        },
        {   id: 2,
            title:"Remera River Suplente",
            price: 5999,
            pictureURL:"/img/producto2.jpg",
            descripcion: "Camiseta De River Adidas Alternativa Bordo"
        },
        {
            id: 3,
            title:"Campera River Impermeable",
            price: 10555,
            pictureURL:"/img/producto3.jpg",
            descripcion: "Camiseta De River Adidas Oficial Blanca"
        }
    ]


    return (            
        <div className="itemList">
            {productos.map(product => <ItemComponent key={product.id} title={product.title} price={product.price} pictureURL={product.pictureURL} descrip={product.descripcion}/>)}
        </div>
    );
}