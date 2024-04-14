import Button from "./ui/Button";
import { useSelector } from "react-redux";

function MenuItem({ menuItem, addToOrder }) {
  const { order } = useSelector((state) => state.cashier);

  return (
    <div key={menuItem?.id} className="card">
      <div className="card-img">
        <img src={menuItem?.img} alt={menuItem?.name} />
      </div>
      <p>
        {menuItem?.name} - {menuItem?.symbol} - {menuItem?.price}
      </p>
      {!order.find((item) => item.id === menuItem.id) ? (
        <Button
          onClick={() => {
            addToOrder(menuItem);
          }}
        >
          Add to Cart
        </Button>
      ) : (
        <p className="text-green py-2">Added</p>
      )}
    </div>
  );
}

export default MenuItem;
