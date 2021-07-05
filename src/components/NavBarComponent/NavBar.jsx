import './style.css';

import { AppBar,Toolbar,IconButton,Typography,Button } from '@material-ui/core';
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidget'
import {NavLink} from 'react-router-dom'

export const NavBarComponent = () => {
    return (
        <>
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          
        </IconButton>
        <Typography variant="h6">
        <NavLink to={`/`} className="unLink">
              <CartWidgetComponent />
        </NavLink>
        </Typography>
        <Typography variant="h4">
        <NavLink to={`/`} className="unLink">
              <p className="title__bar">Ecommerce</p>
        </NavLink>
        </Typography>
        <div className="boton__inicio">
          <NavLink to={`/category/Indumentaria`} className="unLink">
            <Button color="inherit">Indumentaria</Button>
          </NavLink>
        </div>
        <div className="boton__inicio">      
          <NavLink to={`/category/Calzados`} className="unLink">
            <Button color="inherit">Calzado</Button>
          </NavLink>
        </div>
        <div className="boton__inicio">
          <NavLink to={`/category/Accesorios`} className="unLink">
            <Button color="inherit">Accesorios</Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  </>
    );
}