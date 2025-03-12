import { IoClose } from "react-icons/io5";
import CartList from "../Cart/CartList";

const CartBar = ({ latBarOpen, toggleCartBar }) => {
	return (
		<div
			className={`fixed top-0 right-0 w-3/4 sm:w1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
				latBarOpen ? "translate-x-0" : "translate-x-full "
			}`}>
			<div className="flex justify-end p-4">
				<button onClick={toggleCartBar}>
					<IoClose className="h-6 w-6 text-gray-600" />
				</button>
			</div>
			{/* Cart List */}
			<div className="flex-grow p-4 overflow-y-auto">
				<h2 className="text-xl font-bold mb-4">Your Cart</h2>
				<CartList />
			</div>
			{/* Checkout button */}
			<div className="p-4 bg-white sticky bottom-0">
				<button className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
					Checkout
				</button>
				<p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
					Shipping, taxes, and discount codes calculated at checkout
				</p>
			</div>
		</div>
	);
};

export default CartBar;
