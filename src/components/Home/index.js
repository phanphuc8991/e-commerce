import styles from "./Home.module.scss";
import Announcement from "../Announcement";
import Navbar from "../Navbar";
import Slider from "../Slider";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <Announcement />
        <Navbar />
      </div>

      <Slider />
    </div>
  );
}

export default Home;
