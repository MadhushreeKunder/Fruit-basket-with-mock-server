import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider, WishListProvider } from "./contexts";
import setupMockServer from "./api/mock.server";

import App from "./App";
setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);
