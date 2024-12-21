import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div>
			<section className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190425170948/friends-on-road-trip.jpg')" }}>
				<div className="text-center p-8 bg-black bg-opacity-50 rounded-lg">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-4">Explore the World with Us</h1>
					<p className="text-lg md:text-xl mb-6">Book your dream trip at the best prices!</p>
					<Link to="/trips" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-lg transition duration-300">
						Browse Trips
					</Link>
				</div>
			</section>
			<section className="py-16 bg-gray-100">
				<h2 className="text-center text-3xl font-bold mb-8">Featured Trips</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<img src="https://media.istockphoto.com/id/977425932/vector/lets-go-travel-vector-banner-background-design-with-world-famous-travel-destination.jpg?s=1024x1024&w=is&k=20&c=SA0y1D83Gitd28TI79s6l8jd1hkjQ029VsPoeM66YbE=" alt="Trip 1" className="w-full h-56 object-cover" />
						<div className="p-4">
							<h3 className="text-xl font-bold mb-2">Tropical Paradise</h3>
							<p className="text-gray-600 mb-4">Discover the beauty of tropical beaches and stunning sunsets.</p>
							<Link to="/trips/1" className="text-blue-600 hover:underline">
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-summer-ocean-beach-travel-poster-banner-picture-image_1113389.jpg')" }}>
				<h2 className="text-center text-3xl font-bold mb-8">How It Works</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 text-center">
					{/* Step 1 */}
					<div className="p-4">
						<div className="text-4xl text-blue-600 mb-4">1</div>
						<h3 className="text-xl font-bold mb-2">Choose Your Trip</h3>
						<p className="text-gray-600">Browse our wide range of trips to find your perfect destination.</p>
					</div>
					{/* Step 2 */}
					<div className="p-4">
						<div className="text-4xl text-blue-600 mb-4">2</div>
						<h3 className="text-xl font-bold mb-2">Book Online</h3>
						<p className="text-gray-600">Secure your booking in just a few clicks.</p>
					</div>
					{/* Step 3 */}
					<div className="p-4">
						<div className="text-4xl text-blue-600 mb-4">3</div>
						<h3 className="text-xl font-bold mb-2">Enjoy Your Trip</h3>
						<p className="text-gray-600">Pack your bags and get ready for an unforgettable experience.</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home