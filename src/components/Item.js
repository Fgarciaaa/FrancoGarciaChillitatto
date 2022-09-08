function Item({ title, stock, precio, img }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <h1>${precio} - Stock: {stock}</h1>
    </>
  );
}

export default Item;
