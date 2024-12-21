import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="py-8 bg-gray-800 text-white">
			<div className="text-center">
				<p> <span className="text-xl">&copy;</span> 2024 Travel Co. All rights reserved.</p>
				<div className="flex justify-center gap-4 mt-4">
					<Link to="#" className="hover:text-blue-500">Privacy Policy</Link>
					<Link to="#" className="hover:text-blue-500">Terms of Service</Link>
					<Link to="#" className="hover:text-blue-500">Contact Us</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer