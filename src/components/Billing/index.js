import React, { useEffect, useState } from "react";
import AdditionalCost from "./AdditionalCost";
import Bill from "./Bill";
import Suggestion from "./Suggestion";

import { useDispatch, useSelector } from "react-redux";
import { setStateSales } from "../../slices/saleSlice";
import { setStateProducts } from "../../slices/productSlice";

const Billing = () => {
  const productState = useSelector((state) => state.products);
  const saleState = useSelector((state) => state.sales);

  const [products, setProducts] = useState(productState);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [addcost, setaddcost] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sales, setSales] = useState(saleState);

  useEffect(() => {
    setProducts(productState);
  }, [productState]);

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    const productIndex = selectedProducts.findIndex(
      (p) => p.name === product.name
    );
    if (productIndex !== -1) {
      const updatedProducts = [...selectedProducts];
      updatedProducts[productIndex].qty += 1;
      updatedProducts[productIndex].totalPrice =
        updatedProducts[productIndex].qty * updatedProducts[productIndex].price;
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([
        ...selectedProducts,
        { ...product, qty: 1, totalPrice: product.price },
      ]);
    }
  };

  const generateBillNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = 10;
    let billNumber = "";
    for (let i = 0; i < length; i++) {
      billNumber += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return billNumber;
  };

  const handleGenerate = () => {
    const currentDateTime = new Date().toLocaleString();
    const billNumber = generateBillNumber();
    const totalAmount = selectedProducts.reduce(
      (total, product) => total + product.totalPrice,
      0
    );
    const totalWithGST = totalAmount + addcost + (totalAmount * 5) / 100;

    // Format total amount to two decimal places
    const formattedTotal = Number(totalWithGST).toFixed(2);

    // Consolidate selected products into a map
    const selectedProductsMap = selectedProducts.reduce((map, product) => {
      map[product.name] = (map[product.name] || 0) + product.qty;
      return map;
    }, {});

    // Deduct quantity from products
    const updatedProducts = products.map((product) => {
      const selectedQty = selectedProductsMap[product.name] || 0;
      console.log("Product:", product.name);
      console.log("Selected Quantity:", selectedQty);
      return {
        ...product,
        qty: product.qty - selectedQty,
      };
    });

    console.log("Updated Products:", updatedProducts);

    setProducts(updatedProducts);
    dispatch(setStateProducts(updatedProducts));

    // const sale = {
    //   billNumber,
    //   dateTime: currentDateTime,
    //   products: selectedProducts,
    //   additionalCost: addcost,
    //   total: formattedTotal,
    // };

    // setSales([...sales, sale]);
    // dispatch(setStateSales([...sales, sale]));
    // setSelectedProducts([]);

    setSelectedProducts((prevSelectedProducts) => {
      const newSale = {
        billNumber,
        dateTime: currentDateTime,
        products: prevSelectedProducts,
        additionalCost: addcost,
        total: formattedTotal,
      };
      setSales([...sales, newSale]);
      dispatch(setStateSales([...sales, newSale]));
      return [];
    });

    setaddcost(0);
  };

  const handleRemoveProduct = (productName) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.name !== productName
    );
    setSelectedProducts(updatedProducts);
  };

  const handleDecreaseQty = (productName) => {
    const updatedProducts = selectedProducts
      .map((product) => {
        if (product.name === productName) {
          const updatedQty = product.qty - 1;
          if (updatedQty === 0) {
            return null;
          } else {
            return {
              ...product,
              qty: updatedQty,
              totalPrice: updatedQty * product.price,
            };
          }
        }
        return product;
      })
      .filter(Boolean);
    setSelectedProducts(updatedProducts);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = productState.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row mt-2" style={{ justifyContent: "space-around" }}>
        <div className="col-2">
          <Suggestion products={products} handleAddProduct={handleAddProduct} />
        </div>
        <div className="col-6" style={{ borderRight: "1px solid black" }}>
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
          <div
            className="mb-3 row"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <table
              className="table table-striped in-table text-center"
              style={{ padding: "10px", width: "90%", margin: "auto" }}
            >
              <thead style={{ position: "sticky", top: 0 }}>
                <tr>
                  <th>Name</th>
                  <th>qty</th>
                  <th>price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>
                      <button
                        className="btn btn-small"
                        onClick={() => handleDecreaseQty(product.name)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        style={{ width: "40px", textAlign: "center" }}
                        value={
                          selectedProducts.find((p) => p.name === product.name)
                            ?.qty || 0
                        }
                        readOnly
                      />
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        className="btn btn-small btn-warning"
                        onClick={() => handleAddProduct(product)}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <AdditionalCost addcost={addcost} setaddcost={setaddcost} />
        </div>
        <div className="col-3">
          <Bill
            selectedProducts={selectedProducts}
            addcost={addcost}
            onRemoveProduct={handleRemoveProduct}
          />
          <div className="row mt-2">
            <button
              className="btn btn-danger"
              onClick={() => setSelectedProducts([])}
            >
              Clear
            </button>
          </div>
          <div className="row mt-2">
            <button className="btn btn-success" onClick={handleGenerate}>
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
