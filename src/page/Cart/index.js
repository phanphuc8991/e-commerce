import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import cartApi from "../../api/cartApi";
import { useNavigate } from "react-router-dom";
const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;
function Cart() {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setTripeToken] = useState(null);
  const navigate = useNavigate();

  function onToken(token) {
    setTripeToken(token);
  }

  useEffect(() => {
    const createPayment = async () => {
      const datePayment = {
        tokenId: stripeToken.id,
        amount: cart.total * 100,
      };
      try {
        const resPayment = await cartApi.createPayment(datePayment);

        const state = {
          cart,
          stripeData: resPayment,
        };
        navigate("/success", { state });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && createPayment();
  }, [stripeToken]);
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Navbar />
          <Announcement />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.title}>YOUR BAG</div>
          <div className={styles.top}>
            <div className={styles.btnContinue}>
              <button>CONTINUE SHOPPING</button>
            </div>
            <div className={styles.topTexts}>
              <div className={styles.topText}>Shopping Bag(2)</div>
              <div className={styles.topText}>Your Wishlist(0)</div>
            </div>
            <div className={styles.btnCheckout}>
              <button>CHECKOUT NOW</button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              {cart.products.map((product) => (
                <div key={product._id} className={styles.product}>
                  <div className={styles.detailProduct}>
                    <div className={styles.img}>
                      <img alt="" src={product.image} />
                    </div>
                    <div className={styles.descProduct}>
                      <div className={styles.nameProduct}>
                        <b>Product:</b> {product.title}
                      </div>
                      <div className={styles.idProduct}>
                        {" "}
                        <b>ID:</b> {product._id}
                      </div>
                      <div
                        className={styles.colorProduct}
                        style={{ backgroundColor: product.color }}
                      ></div>
                      <div className={styles.sizeProduct}>
                        {" "}
                        <b>Size:</b> {product.size}
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceDetail}>
                    <div className={styles.detailAmount}>
                      <div className={styles.add}>
                        <AddIcon />
                      </div>
                      <div className={styles.amount}>{product.quantity}</div>
                      <div className={styles.remove}>
                        <RemoveIcon />
                      </div>
                    </div>

                    <div className={styles.price}>
                      {product.quantity * product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summary}>
              <div className={styles.summaryBorder}>
                <div className={styles.summaryWrapper}>
                  <div className={styles.summaryTitle}>ORDER SUMMARY</div>
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryItemText}>Subtotal </div>
                    <div className={styles.summaryItemPrice}>$ 80</div>
                  </div>
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryItemText}>
                      Estimated Shipping{" "}
                    </div>
                    <div className={styles.summaryItemPrice}>$ 5.90</div>
                  </div>
                  <div className={styles.summaryItem}>
                    <div className={styles.summaryItemText}>
                      Shipping Discount{" "}
                    </div>
                    <div className={styles.summaryItemPrice}>$ -5.90</div>
                  </div>
                  <div
                    className={styles.summaryItem}
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "30px",
                    }}
                  >
                    <div className={styles.summaryItemText}>Total </div>
                    <div className={styles.summaryItemPrice}>{cart.total}</div>
                  </div>
                  <StripeCheckout
                    name="Shop"
                    image="https://thao68.com/wp-content/uploads/2021/12/avatar-cute-6.jpg"
                    shippingAddress
                    billingAddress
                    description={`Your total is ${cart.total} `}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey={STRIPE_KEY}
                    className={styles.none}
                  >
                    <div className={styles.btn}>
                      <button>CHECKOUT NOW</button>
                    </div>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
