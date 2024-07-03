import { useState } from "react";

import "./index.css";

function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    console.log(res);
    const data1 = await res.json();
    console.log(data1);
    setData(data1);
  };

  return (
    <div className="div">
      <h1>Hello</h1>
      <button onClick={fetchData}>Fetch</button>
      {data && (
        <div>
          <h1>{data.chartName}</h1>
          <h1>{data.disclaimer}</h1>
        </div>
      )}
    </div>
  );
}

export default Home;