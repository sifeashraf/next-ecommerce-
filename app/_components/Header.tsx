"use client";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

import { UserButton } from "@clerk/nextjs";
import { FiShoppingCart } from "react-icons/fi";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { RootState, AppDispatch } from "../redux-state/store";
import { useSelector, useDispatch } from "react-redux";
import { userCartItemsFetch } from "../redux-state/slices/cart-slice";
import "./header.css";
const pages = ["Home", "Explore", "Projects", "About Us", "Contact Us"];

function Header() {
  let [isLoggedin, setIsLoggedIn] = useState<Boolean | null>(false);
  let dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
    dispatch(userCartItemsFetch("sife.ashraf@yahoo.com"));
  }, []);
  let { user } = useUser();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const cartData = useSelector(
    (state: RootState) => state.cartReducer.userdata
  );
  console.log(cartData);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    !isLoggedin && (
      <div className="header-container">
        <div className="header-inner-container">
          <Box sx={{ display: "flex" }}>
            {/* //img start  */}
            <div style={{ width: "50px", height: "50px", marginRight: "10px" }}>
              <img
                src="/logo.svg"
                alt="this is a logo"
                className="header-logo"
              />
            </div>
            {/* pages start */}
            <div className="pages" style={{ lineHeight: "3" }}>
              {pages.map((page) => (
                <Link
                  href={`/${page}`}
                  key={page}
                  className="header-pages-Link"
                >
                  {page}
                </Link>
              ))}
            </div>
          </Box>
          {user ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ position: "relative" }}>
                <FiShoppingCart
                  size={25}
                  color="black"
                  style={{ marginTop: "4px" }}
                />
                <p
                  style={{
                    color: "black",
                    position: "absolute",
                    right: "-5px",
                    top: "-4px",
                    fontSize: "12px",
                    background: "#03858b",
                    borderRadius: "50%",
                    width: "18px",
                    textAlign: "center",
                  }}
                >
                  {cartData.data!.length}
                </p>
              </div>

              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Link
                className="header-link header-link-hover"
                href={"/sign-in"}
                style={{ color: "white", background: "#06bbb9" }}
              >
                Log In
              </Link>
              <Link
                className="header-link"
                href={"/sign-in"}
                style={{ color: "#06bbb9", background: "#f5f3f3" }}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  );
}
export default Header;
