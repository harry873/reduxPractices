import React from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../actions/index";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProduct(response.data));

      console.log(response.data);
    } catch (error) {
      console.log("Error Axios", error);
    }
  };

  return (
    <>
      <ProductList />
    </>
  );
};

export default Product;
