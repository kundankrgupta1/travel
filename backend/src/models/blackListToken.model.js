import { mongoose } from "mongoose";
const blackListTokenSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true,
		unique: true
	}
}, { timestamp: true, versionKey: false });

const blackListTokenModel = mongoose.model("BlackListToken", blackListTokenSchema);
export default blackListTokenModel;