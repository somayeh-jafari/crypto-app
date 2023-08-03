import React from "react";
//styles
import styles from "../components/coin.module.css"
const Coin = ({ name, price, image, symbol, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="coin" />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}> ${price.toLocaleString()} </span>
      <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}</span>
      <span className={styles.marketCap}> ${marketCap.toLocaleString()} </span>
    </div>
  );
};

export default Coin;
