import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
export default function FetchData() {
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  async function fetchData() {
    try {
      const rawData = await fetch("https://www.boredapi.com/api/activity");
      const jsonData = await rawData.json();
      setState([...state, jsonData]);
      setDisableButton(false);
      setError(false);
    } catch (err) {
      setError(true);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(error);
  if (error) {
    return <h1>404 Not Found</h1>;
  }
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid #f44336",
            padding: "15px 25px",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={fetchData}
          disabled={disableButton}
        >
          Generate Activity
        </button>
      </div>
      <div>
        {state.map((data) => {
          return <DisplayData data={data} />;
        })}
      </div>
    </div>
  );
}
