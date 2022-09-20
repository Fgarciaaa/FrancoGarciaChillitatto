import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => (
  <Link to="/cart" style={{color: 'white'}}>
    <BsCartFill size="1.5em" />
  </Link>
);

export default CartWidget;
