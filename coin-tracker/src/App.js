import {useState, useEffect} from "react";

function App() {
  // 로딩을 위해
  const [loading, setLoading] = useState(true);
  // 코인 리스트를 잠시 갖기 위해
  const [coins, setCoins] = useState([]);

  // 인풋에 입력하는 값
  const [dollar, setDollar] = useState(0);

  const onChange = (event) => {
    setDollar(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      setCoins(json)
      setLoading(false); // json 데이터를 다 받아 오면 화면에 뜨는 Loading을 없애기
    });
  }, []);
  return (
    <div>
      <h1>The coins!!{loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input
        type="number"
        value={dollar}
        onChange={onChange}
        placeholder="달러를 입력하세요" />
        {} 달러로 살 수 있는 비트코인은?
      </div>
      {loading ? <strong>Loading...</strong> : 
      <select>
      {coins.map((coin) => 
        <option>
        {coin.name} ({coin.symbol}): {dollar / coin.quotes.USD.price}
        </option>
        )}
      </select>}
    </div>
  );
}

export default App;
