import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  updateProducts,
} from "../features/ProductSlice";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // id nya langsung karna kita mengirim id dari Show(Parent)
  const { id } = useParams();

  // dapatAkses pada State
  const product = useSelector((state) =>
    productSelectors.selectById(state, id)
  );

  useEffect(() => {
    // dispatch saat component unmounted (Not Rendered Yet)
    // dispatch agar dapat datanya dari store
    dispatch(getProducts);
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);
  // Buat function untuk men dispatch datanya

  // gunakan async karena men Dispatch datanya sebelum di redirec
  const UpdateHandler = async (e) => {
    e.preventDefault();
    // Tungguin await selesai dulu
    await dispatch(updateProducts({ id, title, price }));
    Navigate("/");
  };

  return (
    <div>
      <form onSubmit={UpdateHandler} className="box mt-5">
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
          <button className="button is-success">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
