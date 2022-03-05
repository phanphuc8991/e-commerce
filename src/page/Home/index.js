import styles from "./Home.module.scss";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Category from "../../components/Category";
import Product from "../../components/Product";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
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
