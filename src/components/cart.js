import { useCart } from "../contexts";

export function Cart() {
  const { itemsInCart, setItemsInCart } = useCart();

  const incrementQuantity = (fruitId) =>
    setItemsInCart((fruits) =>
      fruits.map((fruit) =>
        fruit.id === fruitId
          ? { ...fruit, quantity: fruit.quantity + 1 }
          : fruit
      )
    );

  const removeFruitFromCart = (removeFruit) => {
    setItemsInCart(itemsInCart.filter((fruit) => fruit !== removeFruit));
  };

  const decrementQuantity = (fruit, fruitId) =>
    setItemsInCart((fruits) =>
      fruits.map((fruit) =>
        fruit.quantity <= 1
          ? removeFruitFromCart(fruit)
          : fruit.id === fruitId
          ? { ...fruit, quantity: fruit.quantity - 1 }
          : fruit
      )
    );

  const calculatePrice = (quantity, price) => {
    return quantity * price;
  };

  const getTotalCost = () => {
    return itemsInCart.reduce(
      (acc, item) => acc + calculatePrice(item.quantity, item.price),
      0
    );
  };

  return (
    <div className="container">
      <div>
        {" "}
        <h1> Cart </h1>
        <br />
        <h3
          style={{
            backgroundColor: "#ECECEC",
            padding: "0.5rem"
          }}
        >
          Total Cost : Rs. {itemsInCart.length ? getTotalCost() : 0}{" "}
        </h3>{" "}
      </div>
      {itemsInCart.map((fruit) => (
        <div className="card flex">
          <div>
            <img src={fruit.image} className="card-img" alt={fruit.name} />
            <h1>{fruit.name}</h1>
            <p>
              Cost:{" "}
              <strong>Rs.{calculatePrice(fruit.quantity, fruit.price)}</strong>
            </p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}> {fruit.quantity}</p>
            <button
              className="button"
              onClick={() => incrementQuantity(fruit.id)}
            >
              {" "}
              +{" "}
            </button>
            <button
              className="button"
              onClick={() => decrementQuantity(fruit, fruit.id)}
            >
              {" "}
              -{" "}
            </button>
            <button
              className="button"
              onClick={() => removeFruitFromCart(fruit)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
