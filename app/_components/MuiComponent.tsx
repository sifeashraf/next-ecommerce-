import { Box } from "@mui/material";

type muiComponentProps = {
  children?: React.ReactNode;
  sx?: any;
};

export const TextBox: React.FC<muiComponentProps> = ({ children, sx }) => (
  <Box sx={sx}>{children}</Box>
);

export const ButtonBox: React.FC<muiComponentProps> = ({ children, sx }) => (
  <Box sx={sx}>{children}</Box>
);
