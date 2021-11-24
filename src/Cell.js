import { useState } from "react";

const Cell = ({ rows, columns, index }) => {
  const [rowSpan, setRowSpan] = useState(1);
  const [colSpan, setColSpan] = useState(1);

  return (
    <div
      className="cell-wrapper"
      style={{
        gridRow: `auto / span ${rowSpan}`,
        gridColumn: `auto / span ${colSpan}`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", height: '100%' }}>
          {/* Cell */}
          <div
            className="cell"
            data-container-id={index}
            data-row={Math.floor(index / rows) + 1}
            data-col={(index % columns) + 1}
            style={{ flexGrow: 1 }}
          >
            Content here
          </div>

          {/* Col Controls */}
          <div>
            <div>
              <button onClick={() => setColSpan((old) => old + 1)}>+</button>
            </div>
            <div>
              <button
                onClick={() => {
                  setColSpan((old) => (old > 0 ? old - 1 : 0));
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'center'}}>
            <button onClick={() => setRowSpan((old) => old + 1)}>+</button>
            <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Cell;
