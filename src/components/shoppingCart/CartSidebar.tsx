import { Cart } from "react-bootstrap-icons";
import { useState } from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from "./CartItem";

interface teste {
  image: string;
  size: string;
}

function CartSidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <Cart />
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Meu carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <CartItem/>
        <CartItem/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartSidebar;