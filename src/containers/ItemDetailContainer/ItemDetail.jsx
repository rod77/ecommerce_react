
import { ItemDetailComponent } from "../../components/ItemDetailComponent/ItemDetail"; 
import { useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import './style.css';

import { getFirestore } from '../../firebase';

export const ItemDetailContainer = () => {
     let [id, setId] = useState([]);
     let [pictureURL, setPictureURL] = useState([]);
     let [title, setTitle] = useState([]);
     let [price, setPrice] = useState([]);
     let [descripcion, setDescripcion] = useState([]);
     const { idProducto } = useParams();

  useEffect(() => {
    getAll();
   }, [idProducto]);

  const getAll = () => { 
    
    let idprueba=parseInt(idProducto)
    const db = getFirestore(); //inicializo el cliente
    const itemsCollection = db.collection('productos');//seteo coleccion
    const aux = itemsCollection.where('idProducto','==',idprueba)
    aux.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
          console.log('No results');
      }
      let snapshot = querySnapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
      });

      setId(snapshot[0].idProducto)
      setPictureURL(snapshot[0].pictureURL)
      setTitle(snapshot[0].title)
      setPrice(snapshot[0].price)
      setDescripcion(snapshot[0].descripcion)
      
  }).catch((error) => {
      console.error("Error:", error);
  });
};

 
    return (
        <div className="unItem">           
             <ItemDetailComponent id={id} pictureURL={pictureURL} title={title}  price={price}  descripcion={descripcion}/> 
        </div>
    )
}
