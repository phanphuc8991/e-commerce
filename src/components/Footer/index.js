import styles from "./Footer.module.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RoomIcon from "@material-ui/icons/Room";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>LAMA.</h1>
        <div className={styles.desc}>
          Rose gold-tone bangle watch featuring round numberless dial with
          three-hand movement and single diamond marker at 12 o'clock 30 mm
          stainless steel case with mineral dial window Japanese quartz movement
          with analog display Split bangle with jewelry-clasp
        </div>
        <div className={styles.social}>
          <div className={styles.circle} style={{ backgroundColor: "#3B5999" }}>
            {" "}
            <FacebookIcon />
          </div>
          <div className={styles.circle} style={{ backgroundColor: "#E4405F" }}>
            {" "}
            <TwitterIcon />
          </div>
          <div className={styles.circle} style={{ backgroundColor: "#55ACEE" }}>
            {" "}
            <InstagramIcon />
          </div>
          <div className={styles.circle} style={{ backgroundColor: "#E60023" }}>
            {" "}
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h1 className={styles.title}>Useful Links</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Man Fashion</li>
          <li className={styles.listItem}>Woman Fashion</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wish List</li>
          <li className={styles.listItem}>Wish List</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.contactItem}>
          <RoomIcon style={{ marginRight: "5px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>
        <div className={styles.contactItem}>
          <CallIcon style={{ marginRight: "5px" }} /> +1 234 56 78
        </div>
        <div className={styles.contactItem}>
          <MailOutlineIcon style={{ marginRight: "5px" }} /> contact@lama.dev
        </div>
        <img
          className={styles.payment}
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </div>
    </div>
  );
}

export default Footer;
