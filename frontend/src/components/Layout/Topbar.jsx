import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
	return (
		<div className="bg-navy text-white">
			<div className=" container mx-auto  flex justify-between items-center py-3 px-4">
				<div className="hidden md:flex items-center space-x-2 py-1">
					<a href="#" className="hover:text-gray-300">
						<TbBrandMeta className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-300">
						<IoLogoInstagram className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-300">
						<RiTwitterXLine className="h-5 w-5" />
					</a>
				</div>
				<div className="text-m text-center flex-grow ">
					<span>
						We ship worldwide! 🌍✨ Fast, secure, and reliable delivery!
					</span>
				</div>
				<div className="text-sm hidden md:block">
					<a href="tel:+1234567890" className="font-bold hover: text-gray-300 ">
						+1 (234) 567-890
					</a>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
