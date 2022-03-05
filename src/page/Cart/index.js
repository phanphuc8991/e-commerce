import styles from "./Cart.module.scss";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
function Cart() {
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
              <div className={styles.product}>
                <div className={styles.detailProduct}>
                  <div className={styles.img}>
                    <img src={require(`../../images/cart-2.png`)} />
                  </div>
                  <div className={styles.descProduct}>
                    <div className={styles.nameProduct}>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </div>
                    <div className={styles.idProduct}>
                      {" "}
                      <b>ID:</b> 93813718293{" "}
                    </div>
                    <div className={styles.colorProduct}></div>
                    <div className={styles.sizeProduct}>
                      {" "}
                      <b>Size:</b> 37.5
                    </div>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.detailAmount}>
                    <div className={styles.add}>
                      <AddIcon />
                    </div>
                    <div className={styles.amount}>1</div>
                    <div className={styles.remove}>
                      <RemoveIcon />
                    </div>
                  </div>

                  <div className={styles.price}>$ 20</div>
                </div>
              </div>

              <div className={styles.product}>
                <div className={styles.detailProduct}>
                  <div className={styles.img}>
                    <img src={require(`../../images/cart-1.png`)} />
                  </div>
                  <div className={styles.descProduct}>
                    <div className={styles.nameProduct}>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </div>
                    <div className={styles.idProduct}>
                      {" "}
                      <b>ID:</b> 93813718293{" "}
                    </div>
                    <div className={styles.colorProduct}></div>
                    <div className={styles.sizeProduct}>
                      {" "}
                      <b>Size:</b> 37.5
                    </div>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.detailAmount}>
                    <div className={styles.add}>
                      <AddIcon />
                    </div>
                    <div className={styles.amount}>1</div>
                    <div className={styles.remove}>
                      <RemoveIcon />
                    </div>
                  </div>

                  <div className={styles.price}>$ 20</div>
                </div>
              </div>

              <div className={styles.product}>
                <div className={styles.detailProduct}>
                  <div className={styles.img}>
                    <img src={require(`../../images/cart-1.png`)} />
                  </div>
                  <div className={styles.descProduct}>
                    <div className={styles.nameProduct}>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </div>
                    <div className={styles.idProduct}>
                      {" "}
                      <b>ID:</b> 93813718293{" "}
                    </div>
                    <div className={styles.colorProduct}></div>
                    <div className={styles.sizeProduct}>
                      {" "}
                      <b>Size:</b> 37.5
                    </div>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.detailAmount}>
                    <div className={styles.add}>
                      <AddIcon />
                    </div>
                    <div className={styles.amount}>1</div>
                    <div className={styles.remove}>
                      <RemoveIcon />
                    </div>
                  </div>

                  <div className={styles.price}>$ 20</div>
                </div>
              </div>
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
                    <div className={styles.summaryItemPrice}>$ 80</div>
                  </div>
                  <div className={styles.btn}>
                    <button>CHECKOUT NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
