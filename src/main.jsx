import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  select: {
    defaultProps: {
      variant: "outlined",
      color: "blue",
      size: "md",
    },
    styles: {
      base: {
        container: {
          position: "relative",
          width: "w-full",
          minWidth: "min-w-[10px]",
        },
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
