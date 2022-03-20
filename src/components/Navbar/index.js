import styles from "./Navbar.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log("state.cart", quantity);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.language}>EN</div>
            <div className={styles.searchContainer}>
              <input className={styles.searchInput} placeholder="Search " />
              <SearchIcon className={styles.searchIcon} />
            </div>
          </div>
          <div className={styles.center}>
            <h1 className={styles.logo}>LAMA.</h1>
          </div>
          <div className={styles.right}>
            <div className={styles.menuItem}>REGISTER</div>
            <div className={styles.menuItem}>SIGN IN</div>
            <div className={styles.menuItem}>
              <Link to={"/cart"}>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
