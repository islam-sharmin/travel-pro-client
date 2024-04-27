import { Link, useLoaderData } from "react-router-dom";


const AllTouristSpot = () => {

    const spots = useLoaderData();

    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">All Tourists Spots</h2>
                <button className="btn bg-purple-600 text-white mb-6">Sort by Average Cost</button>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    spots.map(spot => <div key={spot._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[200px]" src={spot.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{spot.spotName}</h2>
                            <p><span className="font-bold">Average Cost: </span>{spot.averageCost}</p>
                            <p><span className="font-bold">Total Visitors Per Year: </span>{spot.totalVisitorsPerYear}</p>
                            <div className="flex gap-3">
                                <p><span className="font-bold">Travel Time: </span>{spot.travelTime}</p>
                                <p><span className="font-bold">Seasonality: </span>{spot.seasonality}</p>
                            </div>
                            <div className="card-actions mt-4">
                                <Link to={`/viewDetails/${spot._id}`} className="w-full">
                                    <button className="btn w-full  bg-purple-600 text-white">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;