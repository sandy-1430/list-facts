import Axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // let data = [];
  useEffect(() => {
    if (data.length < 9) {
      const getFacts = async () => {
        const response = await Axios.get(`https://catfact.ninja/fact`)
        let obj = { fact: response.data.fact }

        setData((prev) => [...prev, obj]);
      };
      getFacts();
    }
  }, [data])

  return (
    <div className="App">
      <ul>
        {data.length && data.map((x, index) => (
          <li key={index}>{x.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
