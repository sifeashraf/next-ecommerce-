import ProductCard from "./Product-Card";
import api from "../redux-state/slices/products-api";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

async function products() {
  const res = await api.getLatestProducts();

  return res.data.data;
}
export default async function () {
  const allProducts = await products();
  return (
    <Grid
      container
      spacing={2}
      maxWidth={"95%"}
      sx={{
        justifyContent: { xs: "center", md: "unset" },
        alignItems: { xs: "center", md: "unset" },
        margin: "auto",
      }}
    >
      {allProducts.map((product) => (
        <ProductCard data={product} />
      ))}
    </Grid>
  );
}
