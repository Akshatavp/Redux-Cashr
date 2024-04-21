import { useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import AddProductModal from "./AddModal";
import ModalComponent from "./EditModal";

import { useDispatch, useSelector } from "react-redux";
import { setStateProducts } from "../../slices/productSlice";

const Inventory = () => {
  const [edit, setEdit] = useState({
    status: false,
    index: null,
  });

  const dispatch = useDispatch();

  const [addModal, setAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    updatedProducts[filteredProducts[edit.index].originalIndex] = { ...values };
    setProducts(updatedProducts);
    dispatch(setStateProducts(updatedProducts));
    handleClose();
  };

  const handleAddProduct = (values) => {
    const updatedProducts = [...products, { ...values }];
    setProducts([...products, { ...values }]);
    dispatch(setStateProducts(updatedProducts));
    handleAddClose();
  };

  const handleDelete = (index) => {
    const originalIndex = filteredProducts[index].originalIndex;
    const updatedProducts = [...products];
    updatedProducts.splice(originalIndex, 1);
    setProducts(updatedProducts);
    dispatch(setStateProducts(updatedProducts));
    handleClose();
  };

  const stateProducts = useSelector((state) => state.products);

  const [products, setProducts] = useState(stateProducts);

  const filteredProducts = useMemo(() => {
    return products
      .map((product, index) => ({
        ...product,
        originalIndex: index,
      }))
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
  }, [products, searchQuery]);

  return (
    <>
      <ModalComponent
        edit={edit}
        handleClose={handleClose}
        filteredProducts={filteredProducts}
        saveProductChange={saveProductChange}
      />
      <AddProductModal
        addModal={addModal}
        handleAddClose={handleAddClose}
        handleAddProduct={handleAddProduct}
      />
      <div className="mb-3">
        <Button variant="primary" onClick={handleAddOpenModal}>
          Add Product
        </Button>
      </div>
      <div className="container">
        <div className="mb-3 row">
          <input
            type="text"
            style={{
              padding: "10px",
              borderRadius: "13px",
              border: "1px solid black",
            }}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div style={{ maxHeight: "60vh", overflowY: "auto" }} className="row">
          <table className="table table-striped in-table">
            <thead>
              <tr
                style={{
                  position: "sticky",
                  top: 0,
                }}
              >
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Barcode</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={product.originalIndex}>
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
                      className="btn btn-danger "
                      style={{
                        marginLeft: "10px",
                      }}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inventory;
