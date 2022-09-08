import { useEffect, useState } from "react";
import { getAllProducts } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getAllProducts() //
      .then((products) => {
        setProducts(products);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      {isLoading ? (
        <h1>Cargando productos ... </h1>
      ) : (
        <>
          <ItemList products={products} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
