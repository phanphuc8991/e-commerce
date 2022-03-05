import styles from "./App.module.scss";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import DetailProduct from "./page/DetailProduct";
import Register from "./page/Register";
import Login from "./page/Login";
import Cart from "./page/Cart";
function App() {
  return (
    <div className={styles.app}>
      {/* <Home /> 
      {/* <ProductList /> */}
      {/* <DetailProduct /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Cart />
    </div>
  );
}

export default App;
