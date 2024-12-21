import { mongoose } from "mongoose";
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	},
	role: {
		type: String,
		default: "user",
		enum: ["user", "admin"],
		trim: true,
	}
}, { timestamp: true, versionKey: false })
const userModel = mongoose.model("User", userSchema)
export default userModel;