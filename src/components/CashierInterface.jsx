import { useDispatch, useSelector } from "react-redux";
import { addMenuItemToOrder } from "../redux/cashierSlice";
import MenuItem from "./MenuItem";

function CashierInterface() {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);

  const handleAddToOrder = (menuItem) => {
    dispatch(addMenuItemToOrder(menuItem));
  };

  return (
    <div className="cashier-interface">
      <h2>Menu</h2>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem
            key={item?.id}
            menuItem={item}
            addToOrder={handleAddToOrder}
          />
        ))}
      </div>
    </div>
  );
}

export default CashierInterface;
