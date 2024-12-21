import bookingModel from "../models/booking.model.js";
import tripModel from "../models/trip.model.js";
import userModel from "../models/user.model.js";

const createTrip = async (req, res) => {
	const { _id } = req.user;
	const { trip, details, dates, price, slots, cancellationPolicy } = req.body;
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		if (user.role !== "admin") {
			return res.status(401).json({
				message: "you're not allowed to create trip, only admin can create trip",
				success: false
			});
		}
		if (!trip || !details || !dates || !price || !slots || !cancellationPolicy) {
			return res.status(400).json({
				message: "All fields are required",
				success: false
			});
		}
		const newTrip = new tripModel({
			trip, details, dates, price, slots, cancellationPolicy, createdBy: _id
		})
		await newTrip.save();
		return res.status(201).json({
			message: "Trip created successfully",
			success: true,
			newTrip
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const getTrips = async (req, res) => {
	try {
		const trips = await tripModel.find();
		return res.status(200).json(trips)
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const getSingleTrip = async (req, res) => {
	try {
		const trip = await tripModel.findById(req.params.id);
		return res.status(200).json(trip)
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const deleteTrip = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		if (user.role !== "admin") {
			return res.status(401).json({
				message: "you're not allowed to delete any trip, only admin can do it.",
				success: false
			});
		}
		const trip = await tripModel.findById(req.params.id);
		if (!trip) {
			return res.status(404).json({
				message: "Trip not found",
				success: false
			});
		}
		await tripModel.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			message: "Trip deleted successfully",
			success: true
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const updateTrip = async (req, res) => {
	const { _id } = req.user;
	const { trip, details, dates, price, slots, cancellationPolicy } = req.body;
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		if (user.role !== "admin") {
			return res.status(401).json({
				message: "you're not allowed to delete any trip, only admin can do it.",
				success: false
			});
		}
		const tripData = await tripModel.findById(req.params.id);
		if (!trip) {
			return res.status(404).json({
				message: "Trip not found",
				success: false
			});
		}
		if (trip) tripData.trip = trip;
		if (details) tripData.details = details;
		if (dates) tripData.dates = dates;
		if (price) tripData.price = price;
		if (slots) tripData.slots = slots;
		if (cancellationPolicy) tripData.cancellationPolicy = cancellationPolicy;
		await tripData.save();
		return res.status(200).json({
			message: "Trip updated successfully",
			success: true,
			tripData
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const tripBooking = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		const trip = await tripModel.findById(req.params.id);
		if (!trip) {
			return res.status(404).json({
				message: "Trip not found",
				success: false
			});
		}
		if (trip.slots <= 0) {
			return res.status(400).json({
				message: "No slots available",
				success: false
			})
		}
		const booking = new bookingModel({
			user: _id,
			trip: req.params.id
		})
		trip.slots -= 1;
		await booking.save();
		await trip.save();
		return res.status(200).json({
			message: "Trip booked successfully",
			success: true
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const getAllBookings = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		const bookings = await bookingModel.find().populate("trip").populate("user");
		if (!bookings) {
			return res.status(404).json({
				message: "Bookings not found",
				success: false
			});
		}
		return res.status(200).json(bookings);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

const cancelBooking = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id);
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		const booking = await bookingModel.findOne({ user: _id, trip: req.params.id });
		if (!booking) {
			return res.status(404).json({
				message: "Booking not found",
				success: false
			});
		}
		trip.slots += 1;
		await trip.save();
		await booking.remove();
		return res.status(200).json({
			message: "Trip cancelled successfully",
			success: true
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

export default {
	createTrip, getTrips, getSingleTrip, deleteTrip, updateTrip, tripBooking, getAllBookings, cancelBooking };
