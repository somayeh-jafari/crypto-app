import React, { useEffect, useState } from "react";

//API
import { getCoins } from "../services/api";

//components
import Loader from "./Loader";
import Coin from "./Coin";

//styles
import styles from "../components/landing.module.css"

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      console.log(data);
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  
  const searchedCoins =coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input
      className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
