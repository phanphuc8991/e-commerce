import { Link } from "react-router-dom";
import styles from "./ProductItem.module.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <div className={styles.circle}></div>
      <div className={styles.image}>
        <img alt="no" src={product.image} />
        <div className={styles.info}>
          <div className={styles.circleItem}>
            <ShoppingCartOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
          <div className={styles.circleItem}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
          <Link to={`/product/${product._id}`}>
            <div className={styles.circleItem}>
              <SearchOutlinedIcon style={{ fontSize: "18px" }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
