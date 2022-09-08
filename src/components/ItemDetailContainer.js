import { useEffect, useState } from "react";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getProductById(1) //
      .then((product) => {
        setProduct(product);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Cargando detalle ... </h1>
      ) : (
        <>
          <ItemDetail {...product} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
