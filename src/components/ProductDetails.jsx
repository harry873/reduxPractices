import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct } from "../actions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductDetails = () => {
  const { products } = useSelector((state) => state.ApiReducers);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const product = products.find((item) => item.id === Number(id));

  const { title, image, description, price, category } = product;
  //   console.log({ product });
  useEffect(() => {
    getProductData();
  }, []);
  const getProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectProduct(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div>Loading ..... Please Wait </div>
      ) : (
        <div>
          <Card
            sx={{
              width: 900,
              margin: "5rem 10rem",
              display: "flex",
              height: "30rem",
              backgroundColor: "#3e6288",
              color: "#fff",
            }}
          >
            <CardMedia
              component="img"
              height="600"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.white">
                {description}
              </Typography>
              <CardActions>
                <Button size="small">price {price}</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
