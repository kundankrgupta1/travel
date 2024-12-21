import cartModel from "../models/cart.model.js";
import tripModel from "../models/trip.model.js";

const addToCartTrip = async (req, res) => {
	const { _id } = req.user;
	const { tripId, quantity } = req.body;
	try {
		let cart = await cartModel.findOne({ user: _id });
		if (!cart) {
			cart = new cartModel({ user: _id, items: [] });
		}
		const trip = await tripModel.findById(tripId);
		if (!trip) {
			return res.status(404).json({
				message: "Trip not found!",
				success: false,
			})
		}
		const existingTripInCart = cart.items.findIndex((item) => item.trip.toString() === tripId);
		let totalRequestedQuantity = quantity;
		if (existingTripInCart > -1) {
			totalRequestedQuantity += cart.items[existingTripInCart].quantity;
		}
		if (totalRequestedQuantity > trip.slots) {
			return res.status(400).json({
				message: `Only ${trip.slots} are available to book for this trip`,
				success: false
			})
		}
		if (existingTripInCart > -1) {
			cart.items[existingTripInCart].quantity += quantity;
		} else {
			cart.items.push({ trip: tripId, quantity })
		}
		await cart.save();
		return res.status(200).json({
			message: "Trip added to cart successfully!",
			success: true,
			cart,
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false,
		});
	}
};

const getCart = async (req, res) => {
	const { _id } = req.user;
	try {
		const cart = await cartModel.findOne({ user: _id }).populate("items.trip");

		if (!cart || cart.items.length === 0) {
			return res.status(404).json({
				message: "Cart is empty",
				success: false
			});
		}
		const totalPrice = cart.items.reduce((total, item) => {
			return total + item.trip.price * item.quantity;
		}, 0);
		return res.status(200).json({cart, totalPrice});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

const removeFromCart = async (req, res) => {
	const { _id } = req.user;
	const { tripId } = req.body;
	try {
		const cart = await cartModel.findOne({ user: _id });
		if (!cart) {
			return res.status(404).json({
				message: "Cart not found",
				success: false
			});
		}
		const itemIndex = cart.items.findIndex(item => item.trip.toString() === tripId);
		console.log("itemIndex", itemIndex);
		if (itemIndex === -1) {
			return res.status(404).json({
				message: "Trip not found in cart",
				success: false
			});
		}
		cart.items.splice(itemIndex, 1);
		await cart.save();
		return res.status(200).json({
			message: "Trip removed from cart successfully",
			success: true,
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		})
	}
}

export default {addToCartTrip, getCart, removeFromCart};
