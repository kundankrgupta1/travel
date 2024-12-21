import { useState } from "react";
import { Link } from "react-router-dom"
import { BiShow, BiHide } from "react-icons/bi"

const Registration = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevState) => !prevState);
	};
	return (
		<div className="flex flex-col gap-6 max-w-md w-full m-auto mt-5 border rounded-lg p-8 shadow-lg bg-white">
			{/* Heading */}
			<h3 className="text-3xl text-center font-extrabold text-gray-800">Registration</h3>

			{/* Form */}
			<form className="flex flex-col gap-6">
				{/* Email Field */}
				<div className="flex flex-col">
					<label className="text-sm font-medium text-gray-600 mb-1">Name:</label>
					<input
						type="text"
						placeholder="Enter your name"
						required
						className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-sm font-medium text-gray-600 mb-1">Email:</label>
					<input
						type="email"
						placeholder="Enter your email"
						required
						className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>

				{/* Password Field */}
				<div className="flex flex-col relative">
					<label className="text-sm font-medium text-gray-600 mb-1">Password:</label>
					<input
						type={showPassword ? "text" : "password"}
						placeholder="Enter your password"
						required
						className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
					/>
					{/* Show/Hide Button */}
					<button
						type="button"
						onClick={togglePasswordVisibility}
						className="absolute right-3 top-10 text-gray-600 hover:text-gray-800"
					>
						{showPassword ? <BiHide className="text-xl" /> : <BiShow className="text-xl" />}
					</button>
				</div>

				{/* Login Button */}
				<button
					type="submit"
					className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
				>
					Login
				</button>
			</form>

			{/* Register Link */}
			<div className="text-center text-sm text-gray-600">
				Already have an account?&nbsp;
				<Link to="/login" className="text-blue-600 font-medium hover:underline">
					Login
				</Link>
			</div>
		</div>

	)
}

export default Registration