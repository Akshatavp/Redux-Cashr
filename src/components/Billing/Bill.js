const Bill = () => {
  return (
    <div
      className="row text-center"
      style={{
        width: "90%",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          marginTop: "10px",
          borderBottom: "1px solid black",
        }}
      >
        <h5>CASHR</h5>
        <h6>D-Mart</h6>
        <hr></hr>
        <p>BillNo: hsdhfshdfb434</p>
        <div
          // className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>12/04/23</p>
          <p>13:97:08</p>
        </div>
      </div>

      <hr></hr>
      <table
        style={{
          border: "1px dotted black",
        }}
      >
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
        {[...Array(25)].map((_, index) => (
          <tr>
            <td>carrot</td>
            <td>2</td>
            <td>25</td>
            <td>50</td>
          </tr>
        ))}
      </table>

      <table
        style={{
          textAlign: "left",
          position: "sticky",
          bottom: 0,
          backgroundColor: "#ffffff",
          borderTop: "1px solid black",
        }}
      >
        <tr>
          <td>Add Cost</td>
          <td>800</td>
        </tr>
        <tr>
          <td>GST</td>
          <td>100</td>
        </tr>

        <tr>
          <td>Total</td>
          <td>8000</td>
        </tr>
      </table>
      <hr></hr>
    </div>
  );
};

export default Bill;
