import { useState, useEffect } from "react";
import styles from "./Success.module.scss";
import orderApi from "../../api/orderApi";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Success() {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    try {
      const createOrder = async () => {
        const dataOrder = {
          userId: currentUser._id,
          products: cart?.products.map((cart) => ({
            productId: cart._id,
            quantity: cart.quantity,
          })),
          amount: cart?.total,
          address: data.billing_details.address,
        };

        const order = await orderApi.create(dataOrder);
        console.log("order", order);
      };

      data && createOrder();
    } catch (error) {
      console.log(error);
    }
  }, [data, currentUser, cart]);
  return (
    <div className={styles.success}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={require(`../../images/avatar.jpg`)} />
        </div>
        <div className={styles.btnSuccess}>
          <button>Successfull</button>
        </div>
        <div className={styles.desc}>
          Your order is being prepared. Thanks for choosing Phuc shop.
        </div>
      </div>
    </div>
  );
}

export default Success;
