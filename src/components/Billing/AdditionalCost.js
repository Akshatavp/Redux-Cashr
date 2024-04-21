const AdditionalCost = () => {
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
        />
      </div>
      <div className="row mb-2">
        <label className="mb-2 text-center">Additonal cost</label>
        <div className="col ">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            1
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            2
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            3
          </button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col ">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            4
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            5
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            6
          </button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col ">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            7
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            8
          </button>
        </div>
        <div className="col">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-primary"
          >
            9
          </button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col ">
          <button
            style={{
              width: "100%",
            }}
            className="btn btn-danger"
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
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCost;
