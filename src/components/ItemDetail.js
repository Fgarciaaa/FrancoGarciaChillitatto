import ItemCount from "./ItemCount";

function ItemDetail({ title, stock, precio, img, description }) {
  function handleOnAdd(cantidad) {
    alert(`Agregaste ${cantidad} productos al carrito`);
  }

  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <h1>
        ${precio} - Stock: {stock}
      </h1>
      <p>{description}</p>
      <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
    </>
  );
}

export default ItemDetail;
