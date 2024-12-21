import { mongoose } from "mongoose";
const bookingSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	trip: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Trip"
	},
	status: {
		type: String,
		default: "booked",
		enum: ["booked", "cancelled"]
	},
	cancellationDate: {
		type: Date
	},
	refundAmount: {
		type: Number
	}
})
const bookingModel = mongoose.model("Booking", bookingSchema);
export default bookingModel;