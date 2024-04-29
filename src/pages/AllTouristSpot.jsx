import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaChevronDown } from "react-icons/fa";

const AllTouristSpot = () => {
    const loadingSpots = useLoaderData();
    const [spots, setSpots] = useState(loadingSpots);

    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://travel-pro-server-two.vercel.app/allTouristSpots')
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
    }, [user]);

    const handleSort = () => {
        fetch(`https://travel-pro-server-two.vercel.app/allTouristSpotsSort?sort=averageCost`)
            .then(res => res.json())
            .then(data => {
                setSpots(data);
            })
            .catch(error => {
                console.error('Error fetching sorted crafts:', error);
            });
    }

    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-700 mb-6">All Tourists Spots</h2>
                <details className="dropdown">
                    <summary className="m-1 btn bg-purple-600 text-white mb-5">Sort by Average Cost <FaChevronDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={handleSort}><a>ascending</a></button></li>
                    </ul>
                </details>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {spots?.map(spot => (
                    <div key={spot._id} className="card bg-base-100 shadow-xl">
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpot;