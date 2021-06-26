
import { ItemListComponent } from "../ItemListComponent/ItemList"; 
import { useEffect, useState } from "react";
import './style.css';


export const ItemListContainer = ({title}) => {
    let [productos, setProductos] = useState([]);

    useEffect(() => {
        const waitForData = async () => {
            let data = await getData();
            let aux = data.map(element => {
                return{
                    id: element.id,
                    title: element.title,
                    price: element.price,
                    pictureURL: element.pictureURL,
                    descripcion: element.descripcion
                }
            })
            setProductos(aux);
        }
        waitForData();                
    }, [])

    async function getData(){
        const response = await fetch('./data/productos.json')
        const data = await response.json()
        return data
    }

    return (
        <div className="unItem">
            
            <p className="title_Item">{title}</p> 
            <ItemListComponent productos={productos}/>
        </div>
    )
}
