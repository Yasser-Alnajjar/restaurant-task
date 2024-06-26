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
      <div className="row">
        {menuItems.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item?.id}>
            <MenuItem menuItem={item} addToOrder={handleAddToOrder} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CashierInterface;
