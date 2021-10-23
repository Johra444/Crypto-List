import React from "react";
import "./Coin.scss";

const Coin = ({ nom, price, image, symbol, priceChange}) => {

  var link = 'https://www.coingecko.com/en/coins/' + nom.toLowerCase();
  return (
    <tr id="test">
      <td className="image-container">
        <div>
          <img src={image} alt="crypto" className="image" />
        </div>
        <p id="crypto">
          {nom} / {symbol.toUpperCase()}
        </p>
      </td>
      <td>
        <p>${price}</p>
      </td>
      <td>
        {priceChange < 0 ? (
          <p className="red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="green">{priceChange.toFixed(2)}%</p>
        )}
      </td>
      <td id="details">
        <a href={link} target="_blank">More details</a>
      </td>
    </tr>
  );
};

export default Coin;
