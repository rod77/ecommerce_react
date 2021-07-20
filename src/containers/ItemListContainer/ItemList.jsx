
import { ItemListComponent } from "../../components/ItemListComponent/ItemList";  
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import './style.css'; 

import { getFirestore } from '../../firebase';

export const ItemListContainer = () => {
    let [productos, setProductos] = useState([]);
    let [items, setItems] = useState([]);
    let [title, setTitle] = useState([]);
    const { idCategory } = useParams();

    const getAll = () => {
        const db = getFirestore(); //inicializo el cliente
        const itemsCollection = db.collection('productos');//seteo coleccion
        itemsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
            }
            let snapshot = querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            }); 

            let auxCategory
            if (idCategory!==undefined){
                auxCategory = snapshot.filter(element=>element.category==idCategory)
                setTitle(idCategory)
            }
            else {
                auxCategory = snapshot
                setTitle("Todos")
            }
            setItems(auxCategory); 
            
        }).catch((error) => {
            console.error("Error:", error);
        });


    };
    
    
    useEffect(() => {
        getAll(); 
    }, [idCategory]);

    return (
        <div>
        <div className="unItem">
            
            <p className="title_Item">Productos: {title}</p> 
            <ItemListComponent productos={items}/> 
            
        </div>
        <div className="itemAmpliado">            
            
        </div>

        </div>
    )
}
