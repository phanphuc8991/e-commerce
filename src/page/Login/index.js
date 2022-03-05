import styles from "./Login.module.scss";
function Login() {
  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>SIGN IN</h1>
          <form className={styles.inputContent}>
            <div className={styles.row}>
              <input type="text" placeholder="user name" />
              <input type="text" placeholder="password" />
            </div>
          </form>

          <div className={styles.btn}>
            <button>LOGIN</button>
          </div>
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
