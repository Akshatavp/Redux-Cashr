import { useSelector } from "react-redux";

const Sales = () => {
  const saleState = useSelector((state) => state.sales);

  return (
    <>
      {saleState.map((sales) => (
        <div>{sales.billNumber}</div>
      ))}
    </>
  );
};

export default Sales;
