import { useSelector } from "react-redux";

const Suggestion = ({ products, handleAddProduct }) => {
  const productState = useSelector((state) => state.products);

  return (
    <div
      style={{
        justifyContent: "space-around",
        maxHeight: "70vh",
        overflowY: "auto",
      }}
    >
      {productState.map((product) => (
        <div className="col-2 mt-1">
          <div class="card" style={{ width: "7rem" }}>
            <img
              style={{
                width: "100%",
                height: "50px",
              }}
              class="card-img-top"
              src="https://www.jiomart.com/images/product/original/590000186/carrot-orange-500-g-product-images-o590000186-p590000186-0-202207291751.jpg?im=Resize=(1000,1000)"
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-title">{product.name}</p>

              <button
                onClick={() => handleAddProduct(product)}
                class="btn btn-sm btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
