import axiosClient from "./api";

const cartItems = (payload) => axiosClient.post("/carts", payload);

const getUserCartItems = (payload) =>
  axiosClient.get(
    "/carts?populate[products][populate]=banner&filters[email][$eq]=sife.ashraf@yahoo.com"
  );
export default {
  cartItems,
  getUserCartItems,
};
