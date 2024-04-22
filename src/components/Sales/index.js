import { useState } from "react";
import { useSelector } from "react-redux";
import { Collapse, Button } from "react-bootstrap";

const Sales = () => {
  const saleState = useSelector((state) => state.sales);
  const [openSaleIndex, setOpenSaleIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSale = (index) => {
    setOpenSaleIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const downloadBill = (sales) => {
    const billContent = `Bill Number: ${sales.billNumber}\nDate: ${
      sales.dateTime
    }\n\nProducts:\n${sales.products
      .map((product) => `${product.name}: ${product.qty} x ${product.price}`)
      .join("\n")}\n\nAdditional Cost: ${sales.additionalCost}\nTotal: ${
      sales.total
    }`;

    const blob = new Blob([billContent], { type: "text/plain" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${sales.billNumber}_bill.txt`;
    link.click();

    window.URL.revokeObjectURL(url);
  };

  const filteredProducts = saleState.filter((sale) =>
    sale.billNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(saleState);

  return (
    <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
      <div className="mb-3 row">
        <input
          type="text"
          style={{
            padding: "10px",
            borderRadius: "13px",
            border: "1px solid black",
            width: "90%",
            margin: "auto",
          }}
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredProducts.map((sales, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Button
              onClick={() => toggleSale(index)}
              aria-controls={`sale-collapse-${index}`}
              aria-expanded={openSaleIndex === index}
              variant="link"
            >
              {sales.billNumber}
            </Button>
            <div>{sales.dateTime}</div>
            <Button onClick={() => downloadBill(sales)}>
              Download Bill
            </Button>{" "}
          </div>
          <Collapse
            in={openSaleIndex === index}
            style={{
              padding: "30px",
            }}
          >
            <div id={`sale-collapse-${index}`}>
              <table className="table ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.products.map((product, pIndex) => (
                    <tr key={pIndex}>
                      <td>{product.name}</td>
                      <td>{product.qty}</td>
                      <td>{product.price}</td>
                      <td>{product.price * product.qty}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <b>Additional Cost: {sales.additionalCost}</b>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      {" "}
                      <b>{sales.total}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Collapse>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Sales;
