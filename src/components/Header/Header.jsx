import styles from './Header.module.css'
import HeaderBrand from "../HeaderBrand/HeaderBrand";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div className={styles.container}>
      <HeaderBrand />
      <Navbar />
    </div>
  )
}

export default Header;