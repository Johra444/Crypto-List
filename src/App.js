import React, { useEffect, useState } from "react";
import Coin from "./Coin";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  console.log(data);
  return (
    <div id="grid">
      <table>
        <thead>
          <tr id="table-header">
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th id="edit1">
              <span id="edit">edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <Coin
                image={item.image}
                nom={item.name}
                symbol={item.symbol}
                price={item.current_price}
                priceChange={item.price_change_percentage_24h}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
/*
<div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
          <td>Bitcoin</td>
        </tr>
      </tbody>
    </table>
    </div>
*/
export default App;
