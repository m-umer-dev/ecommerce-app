import { Button } from "@mui/material";
import React from "react";

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  background?: string;
  type?: string;
  marginTop?: string;
  mode?: string;
  paddingTop?: string;
}

const CustomButtonComponent: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  background,
  mode,
  marginTop,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={
        mode !== "outline"
          ? {
              fontFamily: " Poppins",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              color: "white",
              backgroundColor: "#B88E2F",
              marginTop,
              border,
              borderRadius: radius,
              height: "40px",
              width: "200px",
            }
          : {
              fontFamily: " Poppins",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              color: "green",

              backgroundColor: background,

              border,
              borderRadius: radius,
              height,
              width,
            }
      }
    >
      {children}
    </Button>
  );
};

export default CustomButtonComponent;
