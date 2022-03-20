import { useEffect, useState } from "react";
import styles from "./Pay.module.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const STRIPE_KEY =
  "pk_test_51KdAwtHL4ftOyF8ekj6AwxOpgD6D50PxsQwk8HOUCYB5wskKVyidvmopadtqiqDimCLD1oXFTKXKFTc9SeP8MjKK00mfaPZYvY";
function Pay() {
  const [stripeToken, setStripeToken] = useState(null);

  function onToken(token) {
    setStripeToken(token);
    console.log(token);
  }
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log("res", res);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div className={styles.pay}>
      <StripeCheckout
        name="Shop"
        image="https://thao68.com/wp-content/uploads/2021/12/avatar-cute-6.jpg"
        shippingAddress
        billingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={STRIPE_KEY}
        className={styles.none}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <button
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "20px",
              paddingRight: "20px",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "black",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            Pay Now
          </button>
        </div>
      </StripeCheckout>
    </div>
  );
}

export default Pay;
