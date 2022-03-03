import styles from "./CategoryItem.module.scss";

function CategoryItem({ category }) {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.imageContainer}>
        <img src={require(`../../images/${category.img}`)} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{category.title}</h1>
        <div className={styles.btn}>
          <button>SHOW NOW</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
