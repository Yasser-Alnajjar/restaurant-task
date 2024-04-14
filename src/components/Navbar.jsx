import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const order = useSelector((state) => state.cashier.order);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tables">Tables</NavLink>
        </li>
        <li>
          <NavLink to="/order">Orders {order.length}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
