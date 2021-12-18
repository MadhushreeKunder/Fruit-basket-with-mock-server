import { useCart } from "../contexts";
import { useWishList } from "../contexts/wishListContext";
import { useAxios } from "../customhooks";

export function Fruits() {
  const { itemsInCart, setItemsInCart } = useCart([]);
  const { itemsInWishList, setItemsInWishList } = useWishList([]);

  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(false);
  // const [fruitsData, setFruitsData] = useState([]);

  // useEffect(() => {
  //   (async function () {
  //     setLoader(true);
  //     try {
  //       const {
  //         data: { fruits }
  //       } = await axios.get("/api/fruits");
  //       setFruitsData(fruits);
  //     } catch (error) {
  //       console.error(error);
  //       setError(true);
  //     } finally {
  //       setError(false);
  //       setLoader(false);
  //     }
  //   })();
  // }, []);

  //useAxios custom hook:
  const [loader, error, fruitsData] = useAxios("/api/fruits");

  const addToCart = (fruit) => {
    const itemExists = itemsInCart.find((item) => fruit.name === item.name);
    if (!itemExists) {
      setItemsInCart([...itemsInCart, { ...fruit, quantity: 1 }]);
    }
  };

  const addToWishList = (fruit) => {
    const itemExists = itemsInWishList.find((item) => fruit.name === item.name);
    if (!itemExists) {
      setItemsInWishList([...itemsInWishList, fruit]);
    }
  };

  return (
    <div className="app-body">
      <div className="container">
        <h1>Fruits</h1>
        <br />
        <div>
          {loader && <span> loading...</span>}
          {error && <span> Error occured! </span>}
        </div>
      </div>
      <main className="main">
        {fruitsData.map((fruit) => (
          <div className="card flex" key={fruit.id}>
            <div className="">
              <img src={fruit.image} className="card-img" alt={fruit.name} />

              <h1>{fruit.name}</h1>
              <p>
                Price: <strong>Rs. {fruit.price} </strong>
              </p>
            </div>
            <div className="flex">
              <button
                style={{ fontSize: "0.75rem" }}
                className="button button-primary"
                onClick={() => addToCart(fruit)}
              >
                Add To Cart
              </button>
              <button
                style={{ fontSize: "0.75rem" }}
                className="button button-secondary"
                onClick={() => addToWishList(fruit)}
              >
                Move To WishList
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
