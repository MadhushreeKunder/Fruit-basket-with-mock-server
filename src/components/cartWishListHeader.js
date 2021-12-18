import { useCart } from "../contexts";
import { useWishList } from "../contexts/wishListContext";

export function CartWishListHeader() {
  const { itemsInCart } = useCart();
  const { itemsInWishList } = useWishList();
  return (
    <>
      <p>Items in Cart: {itemsInCart.length}</p>
      <p>Items in WishList: {itemsInWishList.length}</p>
    </>
  );
}
