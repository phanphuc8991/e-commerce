import { useState } from "react";
import styles from "./Login.module.scss";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../../redux/userSlice";
import userApi from "../../api/userApi";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const resUser = await userApi.login({ username, password });
      console.log(resUser);
      dispatch(loginSuccess(resUser));
    } catch (error) {
      console.log(error);
      dispatch(loginFailure());
    }
  }
  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>SIGN IN</h1>
          <form onSubmit={handleSubmit} className={styles.inputContent}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="user name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
            </div>
            <div className={styles.btn}>
              <button type="submit">LOGIN</button>
            </div>
          </form>

          <div className={styles.link}>
            <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
            <a href="#">CREATE A NEW ACCOUNT.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
