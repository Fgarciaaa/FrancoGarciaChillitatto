import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  function sumar() {
    if (counter === stock) return;

    setCounter(counter + 1);
  }

  function restar() {
    if (counter === 0) return;

    setCounter(counter - 1);
  }

  function agregarAlCarrito() {
    if (counter > 0 && counter <= stock) {
      onAdd(counter);
    }
  }

  return (
    <div>
      <div>
        <button onClick={restar}>-</button>
        {counter}
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
