import styles from "./Register.module.scss";

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
          <form className={styles.inputContent}>
            <div className={styles.row}>
              <input type="text" placeholder="name" />
              <input type="text" placeholder="last name" />
            </div>
            <div className={styles.row}>
              <input type="text" placeholder="user name" />
              <input type="email" placeholder="email" />
            </div>
            <div className={styles.row}>
              <input type="password" placeholder="password" />
              <input type="confirm password" placeholder="confirm password" />
            </div>
          </form>
          <div className={styles.agreement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <div className={styles.btn}>
            <button>CREATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
