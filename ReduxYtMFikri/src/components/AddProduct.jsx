import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../features/ProductSlice";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  // console.log(price);

  // Buat function untuk men dispatch datanya
  const updateProductHandler = (e) => {
    e.preventDefault();
    dispatch(update({ title, price }));
  };

  return (
    <div>
      <form onSubmit={updateProductHandler} className="box mt-5">
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
