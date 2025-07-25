import styles from "./Navbar.module.css";
import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navbar({ cartCount }) {
  const location = useLocation();

  const isHomeActive  = location.pathname === "/";
  const isShopActive  = location.pathname === "/shop";

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        <li className={isHomeActive ? styles.activeLink : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={isShopActive ? styles.activeLink : ""}>
          <Link to="/shop">Shop</Link>
          </li>
        <li onClick={() => alert('Going to shopping cart')}>Cart: {cartCount}</li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;