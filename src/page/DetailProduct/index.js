import styles from "./DetailProduct.module.scss";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
function DetailProduct() {
  return (
    <div className={styles.detailProduct}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Navbar />
          <Announcement />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
            <img src={require(`../../images/jean.jpg`)} />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>Denim Jumpsuit</h1>
            <p className={styles.desc}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <span className={styles.price}>$ 20</span>

            <div className={styles.filterWrapper}>
              <div className={styles.filter}>
                <div className={styles.filterTitle}>Color</div>
                <div
                  className={styles.filterColor}
                  style={{ backgroundColor: "black" }}
                ></div>
                <div
                  className={styles.filterColor}
                  style={{ backgroundColor: "darkblue" }}
                ></div>
                <div
                  className={styles.filterColor}
                  style={{ backgroundColor: "gray" }}
                ></div>
              </div>
              <div className={styles.filter}>
                <div className={styles.filterTitle}>Size</div>
                <div className={styles.filterSize}>
                  <select>
                    <option selected disabled value="">
                      XS
                    </option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.addContainer}>
              <div className={styles.amountContainer}>
                <div className={styles.remove}>
                  <RemoveIcon style={{ fontSize: "20px" }} />
                </div>
                <div className={styles.amount}>
                  <span>1</span>
                </div>
                <div className={styles.add}>
                  <AddIcon style={{ fontSize: "20px" }} />
                </div>
              </div>
              <button>ADD TO CART</button>
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

export default DetailProduct;
