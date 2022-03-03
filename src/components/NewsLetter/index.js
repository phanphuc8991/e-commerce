import styles from "./NewsLetter.module.scss";
import SendIcon from "@material-ui/icons/Send";
function NewsLetter() {
  return (
    <div className={styles.newsLetter}>
      <h1 className={styles.title}>NewsLeter</h1>
      <p className={styles.desc}>
        Get timely updates from your favorite products
      </p>
      <div className={styles.inputContainer}>
        <input type="email" placeholder="Your email" />
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
