import { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ProductList.module.scss";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";

function ProductList() {
  const location = useLocation().pathname.split("/");
  const category = location[location.length - 1];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  function handleFilter(e) {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilters);
  }

  function handleSort(e) {
    setSort(e.target.value);
  }

  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <Navbar />
        <Announcement />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>{category.toUpperCase()}</div>
        <div className={styles.filterWrapper}>
          <div className={styles.filter}>
            <span className={styles.filterTitle}> Fillter Product:</span>
            <select name="color" onChange={handleFilter}>
              <option selected disabled className={styles.optionFilter}>
                color
              </option>
              <option value="all">all</option>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
            </select>

            <select name="size" onChange={handleFilter}>
              <option
                value=""
                selected
                disabled
                className={styles.optionFilter}
              >
                size
              </option>
              <option value="all">all</option>
              <option value="xs">xs</option>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
            </select>
          </div>
          <div className={styles.filter}>
            <span className={styles.filterTitle}> Sort Product: </span>
            <select style={{ marginRight: "0" }} onChange={handleSort}>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <Products category={category} filters={filters} sort={sort} />
        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
