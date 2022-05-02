import { useState, useEffect } from "react";
import styles from "./Categories.module.scss";
import CategoryItem from "../CategoryItem";
import categoryApi from "../../api/categoryApi";
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await categoryApi.getAll();

        const newCategories = categories.filter(
          (category) => category.display.value === 2
        );

        if (newCategories.length > 3) {
          setCategories([newCategories[0], newCategories[1], newCategories[2]]);
        } else {
          setCategories(newCategories);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <CategoryItem category={category} key={category._id} />
      ))}
    </div>
  );
}

export default Categories;
