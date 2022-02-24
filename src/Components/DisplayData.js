import { useState } from "react";

export default function DisplayData({ data }) {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <h3>
        {data?.activity}{" "}
        <button
          onClick={() => setExpand(!expand)}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid skyblue",
            padding: "5px 15px",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {expand ? "Collapse" : "Expand"}
        </button>
      </h3>
      <div>
        {expand &&
          Object.keys(data).map((e) => {
            return (
              e !== "activity" && e !== "link" && <p>{`${e}-${data[e]}`}</p>
            );
          })}
      </div>
    </div>
  );
}
