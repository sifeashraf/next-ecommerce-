"use client";
import { useGetMultiProductsQuery } from "../redux-state/slices/product_Slice";
import ProductCard from "./Product-Card";
export default function () {
  let {
    data: products,
    isError,
    isLoading,
    isSuccess,
  } = useGetMultiProductsQuery();
  return (
    <div>
      {products &&
        isSuccess &&
        products.data.map((product) => <ProductCard data={product} />)}
    </div>
  );
}
