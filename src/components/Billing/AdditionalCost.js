import React, { useState } from "react";

const AdditionalCost = ({ addcost, setaddcost }) => {
  const [additionalCostInput, setAdditionalCostInput] = useState("");

  const handleNumberButtonClick = (number) => {
    setAdditionalCostInput((prevInput) => prevInput + number);
  };

  const handleClearButtonClick = () => {
    setAdditionalCostInput("");
  };

  const handleEnterButtonClick = () => {
    const cost = parseFloat(additionalCostInput);
    if (!isNaN(cost)) {
      setaddcost(cost);
    }
  };

  return (
    <div
      className="row"
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <div className="row">
        <input
          type="text"
          style={{
            padding: "5px",
            borderRadius: "1px",
            border: "1px solid black",
            width: "90%",
            margin: "auto",
            marginBottom: "10px",
          }}
          placeholder="Additional Cost"
          value={additionalCostInput}
          readOnly
        />
      </div>
      <div className="row mb-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <div key={number} className="col-4 mb-3">
            <button
              style={{
                width: "100%",
              }}
              className="btn btn-primary"
              onClick={() => handleNumberButtonClick(number)}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
      <div className="row mb-2">
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-danger"
            onClick={handleClearButtonClick}
          >
            Clear
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
            onClick={() => handleNumberButtonClick(0)}
          >
            0
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-danger"
            onClick={handleEnterButtonClick}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCost;
