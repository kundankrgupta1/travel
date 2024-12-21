import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BiTrip } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const cartCount = 1;

	return (
		<nav className="border-b-2 shadow-sm bg-white flex justify-between items-center px-4 md:px-8 py-4">
			<Link to="/" className="flex items-center">
				<img src={Logo} alt="TravelSite Logo" className="w-24 md:w-36" />
			</Link>

			<ul
				className={`${isMenuOpen ? "block" : "hidden"} 
				md:flex flex-col md:flex-row justify-center items-center md:items-center gap-6 md:gap-8 absolute md:relative top-16 left-0 md:top-auto md:left-auto w-full md:w-auto bg-white md:bg-transparent z-50 md:z-auto shadow-md md:shadow-none`}
			>
				<li className="py-2 pl-6 md:pl-0 md:py-0">
					<Link
						to="/"
						className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300"
					>
						<IoHomeOutline className="text-lg" /> Home
					</Link>
				</li>
				<li className="py-2 pl-6 md:pl-0 md:py-0">
					<Link
						to="/trips"
						className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300"
					>
						<BiTrip className="text-lg" /> Trips
					</Link>
				</li>
			</ul>

			<div className="flex items-center gap-8">
				<Link
					to="/cart"
					className="flex items-center gap-2 relative group text-gray-700"
				>
					<FiShoppingCart className="text-2xl group-hover:text-blue-600 transition duration-300" />
					{cartCount > 0 && (
						<div className="absolute -top-2 left-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
							{cartCount}
						</div>
					)}
					<span className="hidden md:inline-block font-medium group-hover:text-blue-600 transition duration-300">
						Cart
					</span>
				</Link>

				<Link
					to="/login"
					className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300"
				>
					<FaRegUser className="text-lg" /> Login
				</Link>
				<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-2xl text-gray-700 focus:outline-none"
				>
					{isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
				</button>
			</div>
			</div>
		</nav>
	);
};

export default Navbar;
