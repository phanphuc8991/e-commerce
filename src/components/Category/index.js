import styles from "./Category.module.scss";
import CategoryItem from "../CategoryItem";
import { categoryItems } from "../../constants";
function Category() {
  return (
    <div className={styles.category}>
      {categoryItems.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Category;
