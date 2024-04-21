import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";

const AddProductModal = ({ addModal, handleAddClose, handleAddProduct }) => {
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
              <Form.Group controlId="formName" className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formQty" className="mb-2">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="text"
                  name="qty"
                  value={values.qty}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrice" className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCategory" className="mb-2">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBarcode" className="mb-2">
                <Form.Label>Barcode</Form.Label>
                <Form.Control
                  type="text"
                  name="barcode"
                  value={values.barcode}
                  onChange={handleChange}
                />
              </Form.Group>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="secondary " onClick={handleAddClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AddProductModal;
