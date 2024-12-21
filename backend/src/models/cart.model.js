import { mongoose } from "mongoose";
const cartSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	items: [
		{
			trip: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Trip"
			},
			quantity: {
				type: Number,
				default: 1
			}
		},
	],
}, { timestamp: true, versionKey: false });


const cartModel = mongoose.model("Cart", cartSchema);
export default cartModel;
