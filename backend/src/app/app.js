import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"
import cartRouter from "../routes/cart.routes.js";
import userRouter from "../routes/user.routes.js";
import tripRouter from "../routes/trip.routes.js";
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Home Routes!!"));
app.use("/user", userRouter);
app.use("/trip", tripRouter);
app.use(cartRouter);
export default app;
