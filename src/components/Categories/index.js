import styles from "./Categories.module.scss";
import CategoryItem from "../CategoryItem";
import { categoryItems } from "../../constants";
function Categories() {
  return (
    <div className={styles.categories}>
      {categoryItems.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Categories;
