import styles from "./Shop.module.css";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Shop