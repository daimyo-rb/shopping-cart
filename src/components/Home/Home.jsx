import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link to="shop">Shop</Link>
    </div>
  )
}

export default Home