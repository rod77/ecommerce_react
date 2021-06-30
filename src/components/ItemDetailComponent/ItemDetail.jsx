import './style.css';

export const ItemDetailComponent = ({pictureURL, title, price, descripcion}) => { 
    return (            
        <div className="idc_cuerpo">   
            <img className="idc_cuerpo_img" src={pictureURL} alt={title}/>
            <div className="idc_cuerpo_descripcion">
                    <h2 className="idc_title" >{title}</h2>
                    <h2 className="idc_precio">${price}</h2>
                    <h4 className="idc_descripcion">{descripcion}</h4>
            </div>            

        </div>
    );
}