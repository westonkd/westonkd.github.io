import "./App.css";
import tinymce from "tinymce";
import { useEffect, useState } from "react";

import Cell from "./Cell";

function App() {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);
  const [cellCount, setCellCount] = useState(1);

  useEffect(() => {
    tinymce.editors.forEach((editor) => editor.remove())

    tinymce.init({
      inline: true,
      selector: ".cell",
      plugins: "noneditable",
    });
  }, [cellCount]);

  return (
    <>
      <div
        style={{
          borderBottom: "solid 2px gray",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <label>
          Rows
          <input
            type="number"
            min="1"
            value={rows}
            onChange={(e) => setRows(e.currentTarget.value)}
          />
        </label>
        <div style={{ marginLeft: "10px", display: "inline" }}>
          <label>
            Columns
            <input
              type="number"
              min="1"
              value={columns}
              onChange={(e) => setColumns(e.currentTarget.value)}
            />
          </label>
        </div>
      </div>

      <div
        className="App"
        style={{
          gridTemplateRows: `repeat(${rows}, auto)`,
          gridTemplateColumns: `repeat(${columns}, auto)`,
        }}
      >
        {Array.from(Array(cellCount).keys()).map((index) => {
          return (
            <Cell
              rows={rows}
              columns={columns}
              index={index}
              key={`CEL-${index}`}
            />
          );
        })}
        <div className="addCell" onClick={() => setCellCount((old) => old + 1)}>
          + Add Cell
        </div>
      </div>
      <div>End Content</div>
    </>
  );
}

export default App;
