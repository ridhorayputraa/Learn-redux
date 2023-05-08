import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";

// Adalah function yang terdapat function dimana terdapat initial state reducer, kemudian akan membuat action creator dan action tab secara Otomatis

// createAsynThunk => API Asyn function
// CreateentityAdapter => mempermudah memanipulasi state dalam array of Object -> nested data mudah

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    // Ambil Data mengggunakan Await
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

//2.) Function baru untuk Save -> CRUD
export const saveProducts = createAsyncThunk(
  "products/saveProducts",
  // kirimkan datany
  async ({ title, price }) => {
    // Ambil Data mengggunakan Await
    const response = await axios.post("http://localhost:5000/products", {
      title,
      price,
    });
    return response.data;
  }
);

// 3.) Function Delete
export const DeleteProducts = createAsyncThunk(
  "products/deleteProducts",
  // kirimkan id
  async (id) => {
    // Ambil Data mengggunakan Await
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
  }
);

//4.) Function baru untuk Edit -> CRUD
export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  // kirimkan datany
  async ({ id, title, price }) => {
    // Ambil Data mengggunakan Await
    // Patch -> Untuk Update Produk
    const response = await axios.patch(`http://localhost:5000/products/${id}`, {
      title,
      price,
    });
    return response.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "Product",
  // State awal dati entity
  initialState: productEntity.getInitialState(),
  extraReducers: {
    // Meng set State dati Product Entity
    [getProducts.fulfilled]: (state, action) => {
      // SetAll Arrtinya meng set Semua Datanya
      productEntity.setAll(state, action.payload);
    },

    // 2.) Tambhkan save Product
    [saveProducts.fulfilled]: (state, action) => {
      // addOne Arrtinya menambahkan Datanya
      productEntity.addOne(state, action.payload);
    },

    // 3.) Delete Product
    [DeleteProducts.fulfilled]: (state, action) => {
      // removeOne Arrtinya menghapus Datanya
      productEntity.removeOne(state, action.payload);
    },

    // 4.) update Product
    [updateProducts.fulfilled]: (state, action) => {
      // update Arrtinya menghapus Datanya
      // Membuthkan id -> karna menegdit berdasarkan id
      productEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
// getselectr agar dapat akses di state nya
// product haru sama dengan namanya di reducer store
export default productSlice.reducer;
