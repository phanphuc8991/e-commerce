import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./DetailProduct.module.scss";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import productApi from "../../api/productApi";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";

function DetailProduct() {
  const dispatch = useDispatch();
  const location = useLocation().pathname.split("/");
  const id = location[location.length - 1];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1);
  }
  function handleDecreaseQuantity() {
    quantity > 0 && setQuantity(quantity - 1);
  }
  function handleAddCart() {
    dispatch(addCart({ ...product, quantity, color, size }));
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resProduct = await productApi.get(id);

        setColor(resProduct.color[0]);
        setSize(resProduct.size[0]);
        setProduct(resProduct);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  return (
    <div className={styles.detailProduct}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Navbar />
          <Announcement />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
            <img
              src={
                product.image ? require(`../../images/${product.image}`) : ""
              }
              alt=""
            />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.desc}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </p>
            <span className={styles.price}>$ {product.price}</span>

            <div className={styles.filterWrapper}>
              <div className={styles.filter}>
                <div className={styles.filterTitle}>Color</div>
                {product.color?.map((color) => (
                  <div
                    key={color}
                    className={styles.filterColor}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => {
                      setColor(color);
                    }}
                  ></div>
                ))}
              </div>
              <div className={styles.filter}>
                <div className={styles.filterTitle}>Size</div>
                <div className={styles.filterSize}>
                  <select
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {product.size?.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.addContainer}>
              <div className={styles.amountContainer}>
                <div className={styles.remove}>
                  <RemoveIcon
                    onClick={handleDecreaseQuantity}
                    style={{ fontSize: "20px" }}
                  />
                </div>
                <div className={styles.amount}>
                  <span>{quantity}</span>
                </div>
                <div className={styles.add}>
                  <AddIcon
                    onClick={handleIncreaseQuantity}
                    style={{ fontSize: "20px" }}
                  />
                </div>
              </div>

              <button onClick={handleAddCart}>ADD TO CART</button>
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default DetailProduct;
