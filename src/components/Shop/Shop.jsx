import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";

function Shop() {
  const { setCartCount } = useOutletContext();
  return (
    <>
      <h1>Items</h1>
      <div className={styles.container}>
        <ShopItem prodId="1" setCartCart={setCartCount} />
        <ShopItem prodId="2" setCartCart={setCartCount} />
        <ShopItem prodId="3" setCartCart={setCartCount} />
        <ShopItem prodId="4" setCartCart={setCartCount} />
        <ShopItem prodId="5" setCartCart={setCartCount} />
        <ShopItem prodId="6" setCartCart={setCartCount} />
      </div>
    </>
  )
}

export default Shop