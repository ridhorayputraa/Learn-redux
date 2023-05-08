import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProducts } from "../features/ProductSlice";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const CreateProductHandler = async(e) => {
    e.preventDefault();
  // Jalanin dispacth dulu pake async await
    await dispatch(saveProducts({ title, price }));
    // Setalah datanya tersubmit Redirect ke ShowProduct
    Navigate("/");
  };

  return (
    <div>
      <form onSubmit={CreateProductHandler} className="box mt-5">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
