import { useContext } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clear, remove, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <Container className="d-flex align-items-center  flex-column">
        <h1 className="mt-5">No hay productos en el carrito</h1>
        <Button as={Link} className="mt-3" to="/" variant="warning">
          Ir al inicio
        </Button>
      </Container>
    );

  return (
    <Container className="mt-3">
      <Row>
        <Col xsm={2}></Col>
        <Col>
          <strong>Producto</strong>
        </Col>
        <Col>
          <strong>Precio</strong>
        </Col>
        <Col>
          <strong>Cantidad</strong>
        </Col>
        <Col />
      </Row>

      {cart.map((product) => (
        <Row className="pt-3 pb-3 divider">
          <Col className="d-flex justify-content-center " xsm={2}>
            <Image
              style={{ maxWidth: "125px" }}
              src={product.img}
              alt={product.title}
              thumbnail
            />
          </Col>
          <Col className="d-flex align-items-center">{product.title}</Col>
          <Col className="d-flex align-items-center">${product.price}</Col>
          <Col className="d-flex align-items-center">{product.quantity}</Col>
          <Col className="d-flex align-items-center">
            <Button variant="danger" onClick={() => remove(product.id)}>
              <BsTrash />
            </Button>
          </Col>
        </Row>
      ))}
      <h3 className="mt-3 text-center">Total del pedido: ${getTotalPrice()}</h3>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Button variant="outline-danger" onClick={clear}>
            Limpiar carrito
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
        <Button as={Link} to="/checkout" variant="outline-success">Finalizar compra</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
