const Bill = ({ selectedProducts, addcost }) => {
  const totalAmount = selectedProducts.reduce(
    (total, product) => total + product.qty * product.price,
    0
  );

  const total = totalAmount + addcost;

  const gst = (total * 5) / 100;

  // const generateBillNumber = () => {
  //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //   const length = 10;
  //   let billNumber = "";
  //   for (let i = 0; i < length; i++) {
  //     billNumber += characters.charAt(
  //       Math.floor(Math.random() * characters.length)
  //     );
  //   }
  //   return billNumber;
  // };

  // // Format current date and time
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

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
        <p>BillNo: AUTO-GEN</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{currentDate}</p>
          <p>--------</p>
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
        {selectedProducts.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.qty}</td>
            <td>{product.price}</td>
            <td>{product.qty * product.price}</td>
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
          <td>{addcost}</td>
        </tr>
        <tr>
          <td>GST</td>
          <td>{gst}</td>
        </tr>

        <tr>
          <td>Total</td>
          <td>{total + gst}</td>
        </tr>
      </table>
      <hr></hr>
    </div>
  );
};

export default Bill;
