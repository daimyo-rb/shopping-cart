import styles from "./ShopItem.module.css";
import { useState, useEffect } from "react";

function ShopItem( { prodId } ) {
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    const apiStr = `https://fakestoreapi.com/products/${prodId}`;
    console.log(apiStr);
    fetch(apiStr)
      .then(res => res.json())
      .then(json => {
        setImgUrl(json.image);
        setPrice(json.price);
        setItemName(json.title);
        console.log(json);
      })
      .catch(error=>console.log(error));
  }, []);

  return (
    <div className={styles.card}>
      <img src={imgUrl}/>
      <form className={styles.form}>
        <p className={styles.itemName}>{itemName}</p>
        <div className={styles.priceAndQty}>
          <p className={styles.price}>{price}</p>
          <div className={styles.qtyContainer}>
            <button className={styles.qtyButton} type="button">-</button>
            <input type="text" value={1} className={styles.qtyInput}></input>
            <button className={styles.qtyButton} type="button">+</button>
          </div>
        </div>
        <button className={styles.submitButton}>Add to Cart</button>
      </form>
    </div>
  )
}

export default ShopItem