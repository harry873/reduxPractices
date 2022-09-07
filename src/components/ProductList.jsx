import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
const ProductList = () => {
  const product = useSelector((state) => state.ApiReducers.products);
  // const  title  = products;
  // console.log(product);

  return (
    <div className="bg-dark">
      <div className="container p-5">
        <div className="row">
          {product?.map((val) => {
            return (
              <div className="col-lg-3 p-2">
                <Link to={`/product/${val.id}`}>
                  <Card sx={{ maxWidth: 345, height: 500 }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={val.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ height: 100 }}
                      >
                        {val.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textOverflow: "ellipsis",
                          height: 80,
                          whiteSpace: "no-wrap",
                          overflow: "hidden",
                        }}
                      >
                        {val.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
