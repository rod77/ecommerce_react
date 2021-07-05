
import { ItemListComponent } from "../../components/ItemListComponent/ItemList";  
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import './style.css'; 


export const ItemListContainer = () => {
    let [productos, setProductos] = useState([]);
    let [title, setTitle] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        const waitForData = async () => {
            let data = await getData();
            let aux = data.map(element => {
                return{
                    id: element.id,
                    title: element.title,
                    price: element.price,
                    pictureURL: element.pictureURL,
                    descripcion: element.descripcion,
                    category: element.category
                }
            }) 
            let auxCategory
            if (idCategory!==undefined){
                auxCategory = aux.filter(element=>element.category==idCategory)
                setTitle(idCategory)
            }
            else {
                auxCategory = aux
                setTitle("Todos")
            }
            setProductos(auxCategory); 
        }
        waitForData();                
    }, [idCategory])

    async function getData(){
        const response = await fetch('/data/productos.json')
        const data = await response.json()
        return data
    }

    return (
        <div>
        <div className="unItem">
            
            <p className="title_Item">Productos: {title}</p> 
            <ItemListComponent productos={productos}/> 
            
        </div>
        <div className="itemAmpliado">            
            
        </div>

        </div>
    )
}
