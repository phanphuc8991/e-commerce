import styles from "./Product.module.scss";
import ProductItem from "../ProductItem";
import { productItems } from "../../constants";

function Product() {
  return (
    <div className={styles.product}>
      {productItems.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Product;
