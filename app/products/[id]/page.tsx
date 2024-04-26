"use client";
import { BiCartAdd } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import api from "../../redux-state/slices/products-api";
import Grid from "@mui/material/Unstable_Grid2";
import cartItems from "@/app/redux-state/slices/cartItems-api";
import ProductCard from "../Product-Card";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  Breadcrumbs,
  Link,
  Box,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { TextBox } from "@/app/_components/MuiComponent";

import { apicall } from "@/app/redux-state/slices/cart-slice";

import { AppDispatch } from "@/app/redux-state/store";
import { useDispatch } from "react-redux";

export default function ({ params }) {
  let [productData, productSetData] = useState<any>();
  let [similarProducts, setSimilarProducts] = useState<any>();
  let dispatch = useDispatch<AppDispatch>();
  let { user } = useUser();
  const router = useRouter();
  let handleAddToCart = (id: number) => {
    console.log("type here", id);
    if (!user) {
      router.push("/sign-in");
    } else {
      // login to see the cart
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [params.id],
        },
      };
      dispatch(apicall(data));
      cartItems.cartItems(data);
    }
  };

  useEffect(() => {
    const getProductById_ = () => {
      api.getProductById(params?.id).then((res) => {
        productSetData(res.data.data);
      });
    };
    getProductById_();
  }, [params?.id]);

  useEffect(() => {
    if (productData) {
      const getProductsByCategory_ = (category) => {
        api.getProductsByCategory(category).then((res) => {
          setSimilarProducts(res.data.data);
        });
      };
      getProductsByCategory_(productData.attributes.category);
    }
  }, [productData]);

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      <Breadcrumbs aria-label="breadcrumb" separator=">" sx={{ margin: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          <AiOutlineHome /> Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {params.id}
        </Link>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "95%",
          gap: "20px",
          margin: "auto",
        }}
      >
        {productData ? (
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <img
              src={
                productData.attributes.banner.data[0].attributes.formats.large
                  .url
              }
              title="this is banner"
              style={{
                width: "100%",
                height: 350,
                maxWidth: "600px",
                margin: "auto",
              }}
            />
          </Box>
        ) : (
          <Skeleton
            variant="rectangular"
            height={"50vh"}
            sx={{ width: { xs: "100%", md: "50%" } }}
          />
        )}
        <TextBox
          sx={{
            width: { xs: "100%", md: "45%" },
          }}
        >
          <div style={{ width: "fit-content", margin: "auto" }}>
            {productData ? (
              <Typography variant="h4">
                {productData.attributes.title}
              </Typography>
            ) : (
              <Skeleton variant="text" width={250} height={50} />
            )}
            {productData ? (
              productData.attributes.category && (
                <Typography variant="h6" sx={{ color: "custom.contrastTexts" }}>
                  {productData.attributes.category}
                </Typography>
              )
            ) : (
              <Skeleton variant="text" width={200} height={50} />
            )}
            {productData ? (
              <Typography
                sx={{
                  fontWeight: "bold",
                  wordBreak: "break-word",
                  maxWidth: "500px",
                }}
              >
                {productData.attributes.description}
              </Typography>
            ) : (
              <Skeleton variant="text" width={500} height={400} />
            )}
            {productData ? (
              <Typography variant="h5" sx={{ color: "custom.textPryamery" }}>
                ${productData.attributes.price}
              </Typography>
            ) : (
              <Skeleton variant="text" width={50} height={50} />
            )}
            <Button
              variant="contained"
              sx={{
                background: "#06bbb9",
                color: "white",
                textTransform: "none",
                "&:hover": { background: "#03858b !important" },
              }}
              size="large"
              className={productData ? "" : "Mui-disabled"}
              onClick={() => handleAddToCart(productData.id)}
            >
              <BiCartAdd style={{ width: 25, height: 25 }} />
              Add to Cart
            </Button>
          </div>
        </TextBox>
      </Box>
      <h2>similar Products</h2>
      {similarProducts ? (
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: { xs: "center", md: "unset" },
            alignItems: { xs: "center", md: "unset" },
            margin: "auto",
          }}
        >
          {similarProducts.map((product) => (
            <ProductCard data={product} />
          ))}
        </Grid>
      ) : (
        <>
          <Skeleton variant="rectangular" width={"350px"} height={"200px"} />
          <Skeleton variant="text" width={"200px"} height={"50px"} />
        </>
      )}
    </div>
  );
}
