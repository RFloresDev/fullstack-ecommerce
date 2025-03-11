import { IoClose } from "react-icons/io5";

const CartBar = ({ latBarOpen, toggleCartBar }) => {
	return (
		<div
			className={`fixed top-0 right-0 w-3/4 sm:w1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
				latBarOpen ? "translate-x-0" : "translate-x-full "
			}`}>
			<div className="flex justify-end p-4">
				<button onClick={toggleCartBar}>
					<IoClose className="h-6 w-6 text-gray-600" />
				</button>
			</div>
		</div>
	);
};

export default CartBar;
