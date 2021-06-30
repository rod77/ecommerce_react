
import { ItemDetailComponent } from "../../components/ItemDetailComponent/ItemDetail"; 
import { useState } from "react";
import './style.css';


export const ItemDetailContainer = ({productos2}) => {
     let [pictureURL, setPictureURL] = useState([]);
     let [title, setTitle] = useState([]);
     let [price, setPrice] = useState([]);
     let [descripcion, setDescripcion] = useState([]);
  
     async function getItems(){
      let value = new Promise((resolve, reject) => {
        setTimeout(() => {
          let aux = 1;
          if (aux >= 1) {
            resolve(aux)
          } else {
            reject("ERROR");
          }
        }, 3000)
      });
      return value;
     }    

     getItems().then(result => { 
      setPictureURL(productos2[0].pictureURL);
      setTitle(productos2[0].title);
      setPrice(productos2[0].price);
      setDescripcion(productos2[0].descripcion);

    }).catch(error=> {
      console.log(error)
    })


    return (
        <div className="unItem">           
            <ItemDetailComponent pictureURL={pictureURL} title={title}  price={price}  descripcion={descripcion}/>   
        </div>
    )
}
