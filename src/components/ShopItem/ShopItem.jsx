import styles from "./ShopItem.module.css";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function ShopItem( { prodId, setCartCount } ) {
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [itemName, setItemName] = useState('');
  const [inputQty, setInputQty] = useState('1');

  useEffect(() => {
    const apiStr = `https://fakestoreapi.com/products/${prodId}`;
    fetch(apiStr)
      .then(res => res.json())
      .then(json => {
        setImgUrl(json.image);
        setPrice(json.price);
        setItemName(json.title);
      })
      .catch(error=>console.log(error));
  }, [prodId]);

  function decrementQty() {
    setInputQty(prev => {
      const num = Number(prev);
      if (isNaN(num) || num <= 0) return "0";
      return String(num-1);
    });
  }
  function incrementQty() {
    setInputQty(prev => {
      const num = Number(prev);
      if (isNaN(num)) return "0";
      return String(num+1);
    });
  }
  function handleInputChange(e) {
    setInputQty( () => {
      const num = Number(e.target.value);
      if (isNaN(num)) return "0";
      return e.target.value;
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const qty = Number(inputQty);
    setCartCount(prev => prev + qty);
    setInputQty('1');
  }

  return (
    <div className={styles.card}>
      {imgUrl && <img src={imgUrl}/>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.itemName}>{itemName}</p>
        <div className={styles.priceAndQty}>
          <p className={styles.price}>{price}</p>
          <div className={styles.qtyContainer}>
            <button
              className={styles.qtyButton}
              type="button"
              onClick={decrementQty}
            >
              -
            </button>
            <input
              type="text"
              value={inputQty}
              className={styles.qtyInput}
              onChange={handleInputChange}
            ></input>
            <button
              className={styles.qtyButton}
              type="button"
              onClick={incrementQty}
            >
              +
            </button>
          </div>
        </div>
        <button className={styles.submitButton}>Add to Cart</button>
      </form>
    </div>
  )
}

ShopItem.propTypes = {
  prodId: PropTypes.string.isRequired,
  setCartCount: PropTypes.func.isRequired,
};

export default ShopItem