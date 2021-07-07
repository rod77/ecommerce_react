
import { ItemDetailComponent } from "../../components/ItemDetailComponent/ItemDetail"; 
import { useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import './style.css';


export const ItemDetailContainer = () => {
     let [id, setId] = useState([]);
     let [pictureURL, setPictureURL] = useState([]);
     let [title, setTitle] = useState([]);
     let [price, setPrice] = useState([]);
     let [descripcion, setDescripcion] = useState([]);
     const { idProducto } = useParams();
       
    useEffect(() => {
      
      const waitForData = async () => {
        const response = await fetch('/productos.json')
        const json = await response.json()
        let aux = json.filter(element=>element.id==idProducto)

        setId(aux[0].id)
        setPictureURL(aux[0].pictureURL)
        setTitle(aux[0].title)
        setPrice(aux[0].price)
        setDescripcion(aux[0].descripcion)
      }
      waitForData()
  }, [idProducto])
     
    return (
        <div className="unItem">           
          
             <ItemDetailComponent id={id} pictureURL={pictureURL} title={title}  price={price}  descripcion={descripcion}/> 
        </div>
    )
}
