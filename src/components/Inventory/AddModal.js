import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const AddProductModal = ({ addModal, handleAddClose, handleAddProduct }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    qty: Yup.number()
      .required("Quantity is required")
      .positive("Quantity must be positive")
      .integer("Quantity must be an integer"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    category: Yup.string().required("Category is required"),
    barcode: Yup.string().required("Barcode is required"),
  });

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
          validationSchema={validationSchema}
          onSubmit={(values) => handleAddProduct(values)}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formQty" className="mb-2">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="qty"
                  value={values.qty}
                  onChange={handleChange}
                  isInvalid={!!errors.qty}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.qty}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPrice" className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formCategory" className="mb-2">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  isInvalid={!!errors.category}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBarcode" className="mb-2">
                <Form.Label>Barcode</Form.Label>
                <Form.Control
                  type="text"
                  name="barcode"
                  value={values.barcode}
                  onChange={handleChange}
                  isInvalid={!!errors.barcode}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.barcode}
                </Form.Control.Feedback>
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
