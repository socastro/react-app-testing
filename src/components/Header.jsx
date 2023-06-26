import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "../stylesheets/header.css";
import Link from "./Link";
import { act } from '@testing-library/react';


function Header({callback}) {//Hooks para Modal Registro
  const [showU, setShowU] = useState(false);
  const handleCloseU = () => setShowU(false);
  const handleShowU = () => setShowU(true);

  //Hook para abrir el menu
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      callback()
      act(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
    };
    window.addEventListener("resize", handleResize);
    
    return () => 
      window.removeEventListener("resize", handleResize);
  }, [callback]);
    
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);
    
  
    
    
  return(
    <header className="header">
      
    <div className="header__content">
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <Link page="/alo" >
              LINK
            </Link>
            <Button>
              Home
            </Button>
            <Button>
Admin            </Button>
            <Button>
Help            </Button>

           
              <button className="btn" onClick={()=>{handleShowU()}}>Registrate</button>
            
              <button className="btn btn__login" onClick={()=>{handleShowU()}}>Acceder</button>
            
            <Button>Cerrar sesión</Button>
          </ul>

        
          <Modal show={showU} onHide={handleCloseU} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Accede con tu Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id ="login-form">
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type = "email" id = "login-email" placeholder="example@domain.com" required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type = "password" id = "login-password" placeholder="**********" required></Form.Control>
                    </Form.Group>
                </Form>
                <div>¿Olvidaste tu contraseña?</div>
                <Modal.Footer>
                    <ul ><Button type="Button" variant="dark" className="btn btn-lg btn-block" data-dismiss="modal" aria-label="Close" >Volver</Button></ul>
                    <ul><Button type="submit" variant="primary" className="btn btn-lg btn-block">Acceder</Button></ul>
                </Modal.Footer>
            </Modal.Body>     
          </Modal>

        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <button  className="btn" onClick={menuToggleHandler} >T</button> //BiMenuAltRight
          ) : (
            <button onClick={menuToggleHandler}></button>
          )
          }
        </div>
        </div>
        </header>


          
    );
  }
  
export default Header;

  