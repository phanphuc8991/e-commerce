import styles from "./CategoryItem.module.scss";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <div className={styles.categoryItem}>
      <Link to={`products/${category.title}`}>
        <div className={styles.imageContainer}>
          <img alt="" src={category.image} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{category.title}</h1>
          <div className={styles.btn}>
            <button>SHOW NOW</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
