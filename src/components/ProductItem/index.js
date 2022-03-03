import styles from "./ProductItem.module.scss";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <div className={styles.circle}></div>
      <div className={styles.image}>
        <img src={require(`../../images/${product.img}`)} />
        <div className={styles.info}>
          <div className={styles.circleItem}>
            <ShoppingCartOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
          <div className={styles.circleItem}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
          <div className={styles.circleItem}>
            <SearchOutlinedIcon style={{ fontSize: "18px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
