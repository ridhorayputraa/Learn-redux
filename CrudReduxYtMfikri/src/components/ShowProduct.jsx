import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productSelectors,
  DeleteProducts,
} from "../features/ProductSlice";
import { Link } from "react-router-dom";

function ShowProduct() {
  const dispatch = useDispatch();
  // 1.) Ambil datanya pake useSelector

  // 2.) Buat add product pake Link
  const DataProducts = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("OkeeShow");
  DataProducts.map((data) => {
    return console.log(data);
  });
  // console.log(DataProducts.map());
  return (
    <div className="box mt-5">
      <Link to="add" className="button is-success">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping the data here */}
          {DataProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`edit/${product.id}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                // Langsung Dispatch fn DeleteProduct 
                  onClick={() => dispatch(DeleteProducts(product.id))}
                  className="button is-danger is-small"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowProduct;
