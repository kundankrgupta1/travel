import app from "./src/app/app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
	.then(() => {
		console.log(`🚀 [Startup Success]: Database connected successfully! Server is starting...`);
		app.listen(process.env.PORT || 3000, () => {
			console.log(`🌐 [Server Running]: Application is live on http://${process.env.HOST}:${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.error(`❌ [Startup Error]: Unable to start the server due to database connection issues. Error: ${error.message}`);
	});