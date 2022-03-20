import styles from "./App.module.scss";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import DetailProduct from "./page/DetailProduct";
import Register from "./page/Register";
import Login from "./page/Login";
import Cart from "./page/Cart";
import Success from "./page/Success";
import Pay from "./page/Pay";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
