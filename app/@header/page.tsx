"use client";
import { AiOutlineMenu } from "react-icons/ai";
import * as React from "react";
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Button,MenuItem} from "@mui/material";

import Link from "next/link";
import Image from "next/image";
const pages = ["Home", "Explore", "Projects", "About Us", "Contact Us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "grey.50" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              src="/logo.svg"
              alt="this is the logo"
              width={50}
              height={50}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none", color: "orange" },
              order: { xs: 2, md: "unset" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="error"
            >
              <AiOutlineMenu color="black" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              order: { xs: 1, md: "unset" },
            }}
          >
            <Image
              src="/logo.svg"
              alt="this is the logo"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                href={`/${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  margin: "20px 10px",
                  color: "black",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, order: { xs: 3, md: "unset" } }}>
            <Button variant="contained" sx={{ background: "#08D9D6" }}>
              Login
            </Button>
            <Button variant="outlined" color="primary">
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
