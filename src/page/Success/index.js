import styles from "./Success.module.scss";
function Success() {
  return (
    <div className={styles.success}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={require(`../../images/avatar.jpg`)} />
        </div>
        <div className={styles.btnSuccess}>
          <button>Successfull</button>
        </div>
        <div className={styles.desc}>
          Your order is being prepared. Thanks for choosing Phuc shop.
        </div>
      </div>
    </div>
  );
}

export default Success;
