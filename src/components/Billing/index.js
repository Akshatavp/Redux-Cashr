import AdditionalCost from "./AdditionalCost";
import Bill from "./Bill";
import Suggestion from "./Suggestion";
import data from "../../dummy";
import { useState } from "react";

const Billing = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
      <div className="container">
        <div
          className="row mt-2"
          style={{
            justifyContent: "space-around",
          }}
        >
          <div className="col-2">
            <Suggestion />
          </div>
          <div
            className="col-6"
            style={{
              borderRight: "1px solid black",
            }}
          >
            <div className="mb-3 row ">
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
              />
            </div>
            <div
              className="mb-3 row "
              style={{
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <table
                className="table table-striped in-table text-center"
                style={{
                  padding: "10px",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                  }}
                >
                  <tr>
                    <th>Name</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td>{product.name}</td>
                      <td>
                        <button className="btn btn-small ">-</button>
                        <input
                          type="text"
                          style={{
                            width: "40px",
                            textAlign: "center",
                          }}
                          value={1}
                        />
                        <button className="btn btn-small">+</button>
                      </td>
                      <td>{product.price}</td>
                      <td>
                        <button className="btn btn-small btn-warning">
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <AdditionalCost />
          </div>

          <div className="col-3">
            <Bill />
            <div className="row mt-2">
              <button className="btn btn-success">Generate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
