import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import blackListTokenModel from "../models/blackListToken.model.js";
import userModel from "../models/user.model.js";
dotenv.config();

const authenicatedUser = async (req, res, next) => {
	const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
	if (!token) {
		return res.status(401).json({
			message: "Unauthorized access",
			success: false
		});
	}
	const existingBlacklistedToken = await blackListTokenModel.findOne({ token });
	if (existingBlacklistedToken) {
		return res.status(401).json({
			message: "expired or blacklisted token please login again",
			success: false
		});
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false
		});
	}
}

export default authenicatedUser;