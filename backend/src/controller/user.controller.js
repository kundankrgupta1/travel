import dotenv from "dotenv"
dotenv.config();
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";
import blackListTokenModel from "../models/blackListToken.model.js";
import tripModel from "../models/trip.model.js";

const userRegistration = async (req, res) => {
	const { name, email, password, role } = req.body;
	try {
		if (!name || !email || !password) {
			return res.status(400).json({
				message: "All fields are required",
				success: false
			})
		}
		const user = await userModel.findOne({ email });
		if (user) {
			return res.status(501).json({
				message: "User already exists",
				success: false
			});
		}
		const hashPassword = await bcrypt.hash(password, 10);
		const newUser = new userModel({
			name,
			email,
			password: hashPassword,
			role
		});
		await newUser.save();
		return res.status(201).json({
			message: "User registered successfully",
			success: true,
			user: {
				name: newUser.name,
				email: newUser.email,
			}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false,
		});
	}
}

const userLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				success: false
			});
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({
				message: "Invalid credentials",
				success: false
			});
		}
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000
		});
		return res.status(200).json({
			message: "User logged in successfully",
			success: true,
			token,
			user: {
				name: user.name,
				email: user.email
			}
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false,
		});
	}
}

const getUser = async (req, res) => {
	const { _id } = req.user;
	try {
		const user = await userModel.findById(_id).select("-password");

		if (!user) {
			return res.status(404).json({
				message: "you're at wrong place, login again!!",
				success: false
			});
		}
		let trips;
		if (user.role === "admin") {
			trips = await tripModel.find({ createdBy: _id });
		}
		return res.status(200).json({
			message: "User fetched successfully",
			success: true,
			user,
			trips
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: error.message,
			success: false,
		});
	}
}

const userLogout = async (req, res) => {
	try {
		const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
		await blackListTokenModel.create({ token });
		res.clearCookie('token');
		return res.status(200).json({
			message: "User logged out successfully",
			success: true
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			success: false,
		});
	}
}

export default { userRegistration, userLogin, getUser, userLogout };
