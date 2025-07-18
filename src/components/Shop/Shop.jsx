import styles from "./Shop.module.css";
import { useOutletContext, Link } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";

function Shop() {
  const { setCartCount } = useOutletContext();
  return (
    <>
      <h1>Items</h1>
      <div className={styles.container}>
        <ShopItem prodId="1" setCartCart={setCartCount} />
        {/* <ShopItem prodId="2" />
        <ShopItem prodId="3" />
        <ShopItem prodId="4" />
        <ShopItem prodId="5" /> */}
      </div>
    </>
  )
}

export default Shop