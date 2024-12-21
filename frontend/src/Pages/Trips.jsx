import { Link } from "react-router-dom";
const Trips = () => {
	const trips = [
		{
			id: 1,
			image: "https://media.istockphoto.com/id/977425932/vector/lets-go-travel-vector-banner-background-design-with-world-famous-travel-destination.jpg?s=1024x1024&w=is&k=20&c=SA0y1D83Gitd28TI79s6l8jd1hkjQ029VsPoeM66YbE=",
			title: "Tropical Paradise",
			description: "Enjoy a relaxing getaway to the most beautiful tropical beaches.",
			price: "$999",
		},
		{
			id: 2,
			image: "https://media.istockphoto.com/id/977425932/vector/lets-go-travel-vector-banner-background-design-with-world-famous-travel-destination.jpg?s=1024x1024&w=is&k=20&c=SA0y1D83Gitd28TI79s6l8jd1hkjQ029VsPoeM66YbE=",
			title: "Mountain Adventure",
			description: "Explore the breathtaking mountain trails and enjoy stunning views.",
			price: "$1,299",
		},
	];

	return (
		<div>
			<section className="bg-cover bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: "url('https://thetravelworld.co.in/img/blue.jpg')" }}>
				<div className="text-center p-4 bg-black bg-opacity-50 rounded-lg">
					<h1 className="text-4xl font-bold">Explore Our Trips</h1>
					<p className="text-lg mt-2">Find your perfect adventure and make unforgettable memories.</p>
				</div>
			</section>

			<section className="py-8 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between bg-gray-100">
				<div className="flex gap-4">
					<select className="border rounded-md px-4 py-2">
						<option value="">All Destinations</option>
						<option value="beach">Beach</option>
						<option value="mountains">Mountains</option>
						<option value="city">City</option>
					</select>
					<select className="border rounded-md px-4 py-2">
						<option value="">Price Range</option>
						<option value="low">Below $1000</option>
						<option value="medium">$1000 - $2000</option>
						<option value="high">Above $2000</option>
					</select>
				</div>
				<div>
					<select className="border rounded-md px-4 py-2 mt-4 md:mt-0">
						<option value="popular">Sort by: Popular</option>
						<option value="price-low-high">Price: Low to High</option>
						<option value="price-high-low">Price: High to Low</option>
					</select>
				</div>
			</section>

			<section className="py-16 px-4 md:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{trips.map((trip) => (
						<div key={trip.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
							<img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
							<div className="p-4">
								<h3 className="text-xl font-bold mb-2">{trip.title}</h3>
								<p className="text-gray-600 mb-4">{trip.description}</p>
								<div className="flex justify-between items-center">
									<span className="text-lg font-bold text-blue-600">{trip.price}</span>
									<Link to={`/trips/${trip.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
										View Details
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="py-8 flex justify-center">
				<div className="flex gap-2">
					<button className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300">Previous</button>
					<button className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300">1</button>
					<button className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300">2</button>
					<button className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300">Next</button>
				</div>
			</section>
		</div>
	);
}

export default Trips;
