import { useState } from "react";
import "./styles.css";
import { Cart, CartWishListHeader, Fruits, WishList } from "./components";

export default function App() {
  const [route, setRoute] = useState("fruits");
  return (
    <div className="App">
      <h1 className="app-header">Fruit Basket</h1>
      <div className="app-body">
        <button
          className="button button-primary"
          onClick={() => setRoute("fruits")}
        >
          Fruits
        </button>
        <button
          className="button button-primary"
          onClick={() => setRoute("cart")}
        >
          Cart
        </button>
        <button
          className="button button-primary"
          onClick={() => setRoute("wishlist")}
        >
          WishList
        </button>
        <CartWishListHeader />
        {route === "fruits" && <Fruits />}
        {route === "cart" && <Cart />}
        {route === "wishlist" && <WishList />}
      </div>
    </div>
  );
}
