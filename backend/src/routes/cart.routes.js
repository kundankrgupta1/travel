import express from "express";
import cartController from "../controller/cart.controller.js";
import authenicatedUser from "../middleware/auth.middleware.js";
const cartRouter = express.Router();
cartRouter.post("/addToCart", authenicatedUser, cartController.addToCartTrip);
cartRouter.get("/cart", authenicatedUser, cartController.getCart);
cartRouter.post("/removeCart", authenicatedUser, cartController.removeFromCart);
export default cartRouter;