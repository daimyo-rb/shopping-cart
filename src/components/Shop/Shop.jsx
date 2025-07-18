import styles from "./Shop.module.css";
import { Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";

function Shop() {
  return (
    <>
      <h1>Items</h1>
      <div className={styles.container}>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </>
  )
}

export default Shop