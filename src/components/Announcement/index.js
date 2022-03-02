import styles from "./Announcement.module.scss";

function Announcement() {
  return (
    <div className={styles.announcement}>
      <div className={styles.container}>
        Super Deal! Free shipping on Orders Over $50.
      </div>
    </div>
  );
}

export default Announcement;
