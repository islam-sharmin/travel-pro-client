import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Malaysia = () => {

    const [spots, setSpots] = useState([]);

    useEffect( () => {
        fetch('https://travel-pro-server-two.vercel.app/malaysia')
        .then(res => res.json())
        .then(data => setSpots(data))
    }, []);

    return (
        <div>
            <div className="text-center mt-8 mb-8">
                <h2 className="text-3xl font-bold text-purple-700">Malaysia</h2>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {spots?.map(spot => (
                    <div key={spot._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[250px]" src={spot.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{spot.spotName}</h2>
                            <p><span className="font-bold">Average Cost: </span>{spot.averageCost}</p>
                            <p><span className="font-bold">Total Visitors Per Year: </span>{spot.totalVisitorsPerYear}</p>
                            <p><span className="font-bold">Location: </span>{spot.location}</p>
                            <div className="flex gap-3">
                                <p><span className="font-bold">Travel Time: </span>{spot.travelTime}</p>
                                <p><span className="font-bold">Seasonality: </span>{spot.seasonality}</p>
                            </div>
                            <p><span className="font-bold">Description: </span>{spot.shortDescription}</p>
                            <div className="card-actions mt-4">
                                <Link to={`/countryDetails/${spot._id}`} className="w-full">
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

export default Malaysia;