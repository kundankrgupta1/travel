import express from "express"
import tripController from "../controller/trip.controller.js";
import authenicatedUser from "../middleware/auth.middleware.js";
const tripRouter = express.Router();
tripRouter.post("/create", authenicatedUser, tripController.createTrip);
tripRouter.get("/trips", tripController.getTrips);
tripRouter.get("/:id", tripController.getSingleTrip);
tripRouter.delete("/delete/:id", authenicatedUser, tripController.deleteTrip);
tripRouter.put("/edit/:id", authenicatedUser, tripController.updateTrip);
tripRouter.post("/tripBooking", authenicatedUser, tripController.tripBooking);
tripRouter.get("/allBookings", authenicatedUser, tripController.getAllBookings);
tripRouter.put("/cancelBooking/:id", authenicatedUser, tripController.cancelBooking);
export default tripRouter;