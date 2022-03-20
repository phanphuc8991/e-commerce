import styles from "./Home.module.scss";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
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
        <Categories />
      </div>
      <div className={styles.content}>
        <Products />
        <NewsLetter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
