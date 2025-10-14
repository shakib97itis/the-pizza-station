import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const cartTotalQuantity = useSelector(getTotalCartQuantity);
  const cartTotalPrice = useSelector(getTotalCartPrice);

  if (!cartTotalQuantity) return null;
  
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartTotalQuantity} pizzas</span>
        <span>${cartTotalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
