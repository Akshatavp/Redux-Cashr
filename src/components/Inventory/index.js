import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";

const Inventory = () => {
  const [edit, setEdit] = useState({
    status: false,
    index: null,
  });

  const [addModal, setAddModal] = useState(false);

  const handleClose = () => setEdit({ ...edit, status: false });
  const handleAddClose = () => setAddModal(false);

  const handleOpenModal = (index) => {
    setEdit({
      status: true,
      index: index,
    });
  };

  const handleAddOpenModal = () => {
    setAddModal(true);
  };

  const saveProductChange = (values) => {
    const updatedProducts = [...products];
    updatedProducts[edit.index] = { ...values };
    setProducts(updatedProducts);
    handleClose();
  };

  const handleAddProduct = (values) => {
    setProducts([...products, { ...values }]);
    handleAddClose();
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1); // Remove product at index
    setProducts(updatedProducts);
  };

  const [products, setProducts] = useState([
    {
      name: "Milk",
      qty: 65,
      price: 1200,
      category: "daily",
      barcode: "675GBR",
    },
    // additional products...
  ]);

  const ModalComponent = () => {
    const product = products[edit.index];

    return (
      <Modal show={edit.status} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={product}
            onSubmit={(values) => saveProductChange(values)}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formQty">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="qty"
                    value={values.qty}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBarcode">
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control
                    type="text"
                    name="barcode"
                    value={values.barcode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save changes
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    );
  };

  const AddProductModal = () => {
    return (
      <Modal show={addModal} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              qty: "",
              price: "",
              category: "",
              barcode: "",
            }}
            onSubmit={(values) => handleAddProduct(values)}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formQty">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="qty"
                    value={values.qty}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBarcode">
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control
                    type="text"
                    name="barcode"
                    value={values.barcode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="secondary" onClick={handleAddClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <ModalComponent />
      <AddProductModal />
      <div className="mb-3">
        <Button variant="primary" onClick={handleAddOpenModal}>
          Add Product
        </Button>
      </div>
      <table className="table table-striped in-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Barcode</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.qty}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.barcode}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenModal(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inventory;
