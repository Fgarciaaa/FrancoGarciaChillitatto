import { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ id, title, stock, price, img, description }) {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addProduct, getProductQuantity } = useCart();

  function handleOnAdd(quantity) {
    setShowItemCount(quantity <= 0);
    addProduct({ id, title, price, quantity });

  }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6}>
          <Image src={img} alt={title} thumbnail />
        </Col>
        <Col xs={12} lg={6}>
          <h4 className="fs-4" style={{ color: "#212529" }}>
            {title}
          </h4>
          <h5 className="fs-5" style={{ color: "#212529" }}>
            ${price} - {stock} unidades disponibles
          </h5>
          <p style={{ color: "#51585e" }}>{description}</p>
          <div className="d-flex justify-content-center mt-4">
            {showItemCount ? (
              <ItemCount
                initial={getProductQuantity(id)}
                stock={stock}
                onAdd={handleOnAdd}
                className="w-50"
              />
            ) : (
              <Button variant="warning" as={Link} to="/cart">Ver el carrito</Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
