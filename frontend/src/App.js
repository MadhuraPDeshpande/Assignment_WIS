import Graph from "./components/Graph";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (stt,edt) => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/data");
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  fetchData();

  return (
    <div className="app">
        <div id="pregraph">Cycle Status</div>
          <Graph data={data} loading={loading} error={error}></Graph>
    </div>
  );
}

export default App;
