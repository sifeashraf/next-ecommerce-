import { Box, Typography, Container, Button } from "@mui/material";
import React from "react";
import { TextBox, ButtonBox } from "./MuiComponent";

export default function HeroSection() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: 0,
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <TextBox
          sx={{
            display: "flex",
            maxWidth: "550px",
            flexWrap: "wrap",
            fontWeight: "bold",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: { sm: "block", xs: "inline" },
              fontSize: "3rem",
              fontWeight: "bolder",
              lineHeight: "27px",
            }}
          >
            All Your Digital Products.
            <Typography
              sx={{
                color: "custom.textPryamery",
                fontSize: "3rem",
                display: { sm: "block", xs: "inline" },
                fontWeight: "bolder",
              }}
            >
              IS One Click Away.{" "}
            </Typography>
          </Typography>
        </TextBox>
        <ButtonBox
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { sm: "space-between", xs: "center" },
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "95%", sm: "45%" },
              maxWidth: { sm: "250px", xs: "100%" },
              bgcolor: "custom.teal",
              mb: { sm: 0, xs: "10px" },
              "&:hover": {
                bgcolor: "custom.textPryamery",
              },
            }}
          >
            hello
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: { xs: "95%", sm: "45%" },
              maxWidth: { sm: "250px", xs: "100%" },
              color: "custom.teal",
              borderColor: "custom.teal",
              "&:hover": {
                borderColor: "custom.textPryamery",
              },
            }}
          >
            hello
          </Button>
        </ButtonBox>
      </Box>
    </Container>
  );
}
