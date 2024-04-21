import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";

const ModalComponent = ({
  edit,
  handleClose,
  filteredProducts,
  saveProductChange,
}) => {
  const product = filteredProducts[edit.index];

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
              <Form.Group controlId="formBarcode" className="mb-2 bold">
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
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" className="ml-4" type="submit">
                  Save changes
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
