import './style.css';

// id, title, price, pictureUrl
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { ItemCountComponent } from '../ItemCountComponent/ItemCount';
const useStyles = makeStyles({
    root: {
      width: 200,
    },
    media: {
      height: 200,
    },
  });

 

export const ItemComponent = ({id,title, price, pictureURL, descrip}) => {    
    const classes = useStyles();
    const onAdd=(cantidad)=>{
        
      cantidad>0?alert(`Has agregado al carrito: ${cantidad} Unidades`):alert(`No puedes agregar 0 unidades`)
  }
    return (            
        <div className="Item">
            
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pictureURL}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
           {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            <b>Valor: {price} $</b>
        </Typography>

        </CardContent>
        </CardActionArea>
        <ItemCountComponent  stock={5} initial={1} onAdd={onAdd}/>
    </Card>

        </div>
    );
}




