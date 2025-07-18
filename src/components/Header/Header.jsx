import styles from './Header.module.css'
import HeaderBrand from "../HeaderBrand/HeaderBrand";
import Navbar from "../Navbar/Navbar";

function Header({ cartCount }) {
  return (
    <div className={styles.container}>
      <HeaderBrand />
      <Navbar cartCount={cartCount}/>
    </div>
  )
}

export default Header;