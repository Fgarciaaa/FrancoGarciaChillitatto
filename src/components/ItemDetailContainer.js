import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product.service";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getProductById(id)
      .then((product) => {
        setProduct(product);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" className="m-5" variant="primary" />
        </div>
      ) : (
        <>
          <ItemDetail {...product} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
