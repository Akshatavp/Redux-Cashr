import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Inventory = () => {
  const [edit, setEdit] = useState({
    status: false,
    name: "",
    qty: "",
    price: "",
    category: "",
    barcode: "",
    index: null,
  });

  const handleClose = () => setEdit({ ...edit, status: false });

  const saveproductchange = () => {
    const updatedProducts = [...products];

    console.log(updatedProducts[edit.index]);
    updatedProducts[edit.index] = {
      name: edit.name,
      qty: edit.qty,
      price: edit.price,
      category: edit.category,
      barcode: edit.barcode,
    };

    setProducts(updatedProducts);
    handleClose();
  };

  const [products, setProducts] = useState([
    {
      name: "Milk",
      qty: 65,
      price: 1200,
      category: "daily",
      barcode: "675GBR",
    },
    {
      name: "Milk",
      qty: 65,
      price: 1200,
      category: "daily",
      barcode: "675GBR",
    },
    {
      name: "Milk",
      qty: 65,
      price: 1200,
      category: "daily",
      barcode: "675GBR",
    },
    {
      name: "Milk",
      qty: 65,
      price: 1200,
      category: "daily",
      barcode: "675GBR",
    },
    {
      name: "Milk",
      qty: 65,
      price: 1200,
      category: "daily",
      barcode: "675GBR",
    },
  ]);

  const Modell = () => {
    return (
      <>
        <Modal show={edit.status} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control defaultValue={edit.name}></Form.Control>
            <Form.Control defaultValue={edit.qty}></Form.Control>
            <Form.Control defaultValue={edit.price}></Form.Control>
            <Form.Control defaultValue={edit.category}></Form.Control>
            <Form.Control defaultValue={edit.barcode}></Form.Control>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveproductchange}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  console.log(edit.name);

  return (
    <>
      <Modell />
      <table class="table table-striped in-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Barcode</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x, index) => (
            <tr key={index}>
              <td>{x.name}</td>
              <td>{x.qty}</td>
              <td>{x.price}</td>
              <td>{x.category}</td>
              <td>{x.barcode}</td>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setEdit({
                    status: true,
                    name: x.name,
                    qty: x.qty,
                    price: x.price,
                    category: x.category,
                    barcode: x.barcode,
                    index: index,
                  });
                }}
              >
                Edit
              </button>
              <button className="btn btn-danger">delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inventory;
