import { Link } from "react-router-dom";
const FeaturedCollection = () => {
	return (
		<section className="py-16 px-4 lg:px-0">
			<div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
				{/* Left Side */}
				<div className="lg:w-1/2 p-8 text-center lg:text-left">
					<h2 className="text-lg font-semibold text-gray-700">
						Comfort and Style
					</h2>
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">
						Apparel made for you
					</h2>
					<p className="text-lg text-gray-600 mb-6">
						Discover confortable and high-quality clothing which matches your
						style and effortlessly blends fashion and function.
					</p>
				</div>
			</div>
			<Link></Link>
		</section>
	);
};

export default FeaturedCollection;
