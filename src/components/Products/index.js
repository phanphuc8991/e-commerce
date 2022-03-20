import { useEffect, useState, useRef } from "react";
import styles from "./Products.module.scss";
import productApi from "../../api/productApi";
import ProductItem from "../ProductItem";

Products.defaultProps = {
  category: "",
  filters: {},
  sort: "newest",
};
function Products(prors) {
  const { category, filters, sort } = prors;
  const initialProducts = useRef([]);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const params = {
        category,
      };
      try {
        if (category) {
          const resProducts = await productApi.getAll(params);
          setFilteredProduct(resProducts);
          initialProducts.current = resProducts;
        } else {
          const resProducts = await productApi.getAll();
          setProducts(resProducts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    let newProducts = [...initialProducts.current];
    if (filters.color || filters.size) {
      if (filters.color) {
        if (filters.color === "all") {
          newProducts = [...initialProducts.current];
        } else {
          newProducts = newProducts.filter(
            (product) => product.color === filters.color
          );
        }
      }
      if (filters.size) {
        if (filters.size === "all") {
          newProducts = [...initialProducts.current];
        } else {
          newProducts = newProducts.filter(
            (product) => product.size === filters.size
          );
        }
      }
    }
    setFilteredProduct(newProducts);
  }, [filters]);

  useEffect(() => {
    if (category) {
      switch (sort) {
        case "newest":
          setFilteredProduct((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
          break;
        case "asc":
          setFilteredProduct((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
          break;
        case "desc":
          setFilteredProduct((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
          break;
        default:
      }
    }
  }, [sort]);

  return (
    <div className={styles.products}>
      {category
        ? filteredProduct.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))
        : products.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
    </div>
  );
}

export default Products;
