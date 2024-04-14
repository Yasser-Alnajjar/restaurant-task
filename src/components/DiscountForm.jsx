import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

function DiscountForm({ applyDiscount }) {
  const [discount, setDiscount] = useState("YASSER10");

  const handleChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyDiscount(discount);
    setDiscount("");
  };

  return (
    <form onSubmit={handleSubmit} className="discount-form">
      <Input
        type="text"
        value={discount}
        onChange={handleChange}
        placeholder="Enter discount code"
      />
      <Button rounded="lg" type="submit">
        Apply
      </Button>
    </form>
  );
}

export default DiscountForm;
