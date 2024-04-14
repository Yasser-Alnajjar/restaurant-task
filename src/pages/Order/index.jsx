import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/ui/Button";
import {
  applyDiscount,
  calculateTotal,
  modifyOrderQuantity,
} from "../../redux/cashierSlice";
import DiscountForm from "../../components/DiscountForm";
import Receipt from "../../components/Receipt";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Order() {
  const order = useSelector((state) => state.cashier.order);

  const dispatch = useDispatch();
  const handleModifyQuantity = (menuItem, quantity) => {
    dispatch(modifyOrderQuantity({ menuItem, quantity }));
  };
  const handleApplyDiscount = (discount) => {
    dispatch(applyDiscount(discount));
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        <h2 className="mb-4">Order ({order.length})</h2>
        {order.length !== 0 ? (
          <div className="row">
            <div className="col-9">
              <div className="order">
                <div className="content">
                  {order.map((item) => (
                    <div key={item.id} className="order-item">
                      <div className="flex align-center justify-between gap-2">
                        <div className="order-item-content flex gap-4">
                          <div className="order-item-img">
                            <img width={100} src={item.img} alt="" />
                          </div>
                          <div className="flex flex-column gap-2">
                            <span>{item.name}</span>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                        <div className="flex flex-column gap-2">
                          <p>
                            {item.symbol} {item.price}
                          </p>
                          <p className="quant">Quantity: {item.quantity}</p>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => {
                                handleModifyQuantity(item, item.quantity + 1);
                                dispatch(calculateTotal());
                              }}
                            >
                              +
                            </Button>
                            <Button
                              onClick={() => {
                                handleModifyQuantity(item, item.quantity - 1);
                                dispatch(calculateTotal());
                              }}
                            >
                              -
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <h2 className="card-title">Have a coupon?</h2>
                <DiscountForm applyDiscount={handleApplyDiscount} />
              </div>
              <div className="card mt-4">
                <Receipt />
              </div>
            </div>
          </div>
        ) : (
          <p>
            Please Chose What you need From{" "}
            <Link to="/" className="text-primary under-line">
              Home
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export default Order;
