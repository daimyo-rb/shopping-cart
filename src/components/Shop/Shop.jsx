import styles from "./Shop.module.css";
import { Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";

function Shop() {
  return (
    <>
      <h1>Items</h1>
      <div className={styles.container}>
        <ShopItem prodId="1" />
        {/* <ShopItem prodId="2" />
        <ShopItem prodId="3" />
        <ShopItem prodId="4" />
        <ShopItem prodId="5" /> */}
      </div>
    </>
  )
}

export default Shop