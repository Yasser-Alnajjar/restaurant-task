import { useSelector } from "react-redux";
import Button from "./ui/Button";

function Receipt() {
  const { total, subtotal, discountAmount, discountApplied } = useSelector(
    (state) => state.cashier
  );
  return (
    <div className="receipt">
      <p className="flex justify-between">
        <span>Subtotal: </span> <span>${subtotal}</span>
      </p>
      {discountApplied && (
        <p className="flex justify-between">
          <span>Discount: </span> <span>${discountAmount}</span>
        </p>
      )}
      <hr className="my-2" />
      <p className="flex justify-between">
        <span>Total: </span> <span>${total}</span>
      </p>
      <Button className="mt-2" fullWidth variant="green">
        Checkout
      </Button>
    </div>
  );
}

export default Receipt;
