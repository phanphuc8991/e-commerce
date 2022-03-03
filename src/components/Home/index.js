import styles from "./Home.module.scss";
import Announcement from "../Announcement";
import Navbar from "../Navbar";
import Slider from "../Slider";
import Category from "../Category";
import Product from "../Product";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Announcement />
          <Navbar />
        </div>
        <Slider />
        <Category />
      </div>
      <div className={styles.content}>
        <Product />
        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
