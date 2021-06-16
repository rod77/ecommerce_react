import './style.css';

import { AppBar,Toolbar,IconButton,Typography,Button } from '@material-ui/core';
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidget'

export const NavBarComponent = () => {
    return (
        <>
      

      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          
        </IconButton>
        <Typography variant="h6">
              <CartWidgetComponent />
        </Typography>
        <Typography variant="h4">
              <p className="title__bar">Ecommerce</p>
        </Typography>
        <div className="boton__inicio">
        <Button color="inherit">Indumentaria</Button>
        </div>
        <div className="boton__inicio">
        <Button color="inherit">Calzado</Button>
        </div>
        <div className="boton__inicio">
        <Button color="inherit">Accesorios</Button>
        </div>
      </Toolbar>
    </AppBar>
        
    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Indumentaria">Indumentaria</Nav.Link>
        <Nav.Link href="#Zapatos">Zapatos</Nav.Link>
        <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
     </Nav>      
    </Navbar.Collapse>
    </Container>
  </Navbar> */}
  </>
    );
}