import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Checkout from "../Pages/Checkout"
import Payment from "../Pages/Payment"
import ManageBooking from "../Pages/ManageBooking"
import Dashboard from "../Pages/Dashboard"
import Registration from "../Pages/Registration"
import Trips from "../Pages/Trips"
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/trips" element={<Trips />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/payment" element={<Payment />} />
			<Route path="/managetrip" element={<ManageBooking />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	)
}

export default AllRoutes