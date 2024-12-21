import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import AllRoutes from "./Routes/AllRoutes"

const App = () => {
	return (
		<div className="border w-full max-w-screen-xl m-auto">
			<Navbar />
			<AllRoutes />
			<Footer />
		</div>
	)
}

export default App