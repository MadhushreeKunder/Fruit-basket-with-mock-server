import { useWishList } from "../contexts/wishListContext";

export function WishList() {
  const { itemsInWishList, setItemsInWishList } = useWishList();

  const removeFruitFromWishList = (removeFruit) => {
    setItemsInWishList(
      itemsInWishList.filter((fruit) => fruit !== removeFruit)
    );
  };

  return (
    <div className="container">
      <h1> WishList </h1>
      {itemsInWishList.map((fruit) => (
        <div className="card flex">
          <div>
            <img src={fruit.image} className="card-img" alt={fruit.name} />
            <h1 key={fruit.id}> {fruit.name}</h1>
            <p>Price: {fruit.price}</p>
            <button onClick={() => removeFruitFromWishList(fruit)}>
              Remove{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
