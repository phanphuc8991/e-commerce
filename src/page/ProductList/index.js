import styles from "./ProductList.module.scss";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Product from "../../components/Product";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";

function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <Navbar />
        <Announcement />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Dresses</div>
        <div className={styles.filterWrapper}>
          <div className={styles.filter}>
            <span className={styles.filterTitle}> Fillter Product:</span>
            <select>
              <option
                className={styles.optionFilter}
                selected
                disabled
                value=""
              >
                Color
              </option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Yellow</option>
              <option value="">Green</option>
            </select>

            <select>
              <option selected disabled value="">
                Size
              </option>
              <option value="">XS</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
            </select>
          </div>
          <div className={styles.filter}>
            <span className={styles.filterTitle}> Sort Product: </span>
            <select>
              <option selected disabled value="">
                Newest
              </option>
              <option value="">Price (asc)</option>
              <option value="">Price (desc)</option>
            </select>
          </div>
        </div>
        <Product />
        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
