import { mongoose } from "mongoose";
const tripSchema = new mongoose.Schema({
	trip: {
		type: String,
		required: true,
		trim: true
	},
	details: {
		type: String,
		required: true,
		trim: true
	},
	dates: {
		type: String,
		trim: true,
		required: true
	},
	price: {
		type: Number,
		trim: true,
		required: true
	},
	slots: {
		type: Number,
		required: true,
		trim: true
	},
	cancellationPolicy: {
		type: String,
		required: true,
		trim: true,
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}
}, {
	timestamp: true,
	versionKey: false
})

const tripModel = mongoose.model("Trip", tripSchema);
export default tripModel;