import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";


const PopularTouristSpot = () => {

    const [spots, setSpots] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/allTouristSpots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, []);


    return (
        <div>
            <div className="my-14 space-y-2">
                <Slide>
                <h2 className="text-3xl font-bold text-center text-purple-700">Some Popular Tourist Spots</h2>
                <p className="text-center w-[70%] mx-auto text-slate-600">
                    Embark on a journey to breathtaking landscapes, cultural wonders, and hidden gems with our tourism website, your passport to unforgettable travel experiences.</p>
                </Slide>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    spots?.slice(0, 6).map(spot => <div key={spot._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={spot.photo} alt="Shoes" className="rounded-xl w-full h-[230px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{spot.spotName}</h2>
                                <div className="flex justify-between gap-5 ">
                                    <p><span className="font-bold">Country Name:</span> {spot.countryName}</p>
                                    <p><span className="font-bold">Average Cost:</span> {spot.averageCost}</p>
                                </div>
                                <p><span className="font-bold">Description: </span>{spot.shortDescription}</p>
                                <div className="w-full">
                                    <Link to={`/viewDetails/${spot._id}`}><button className="btn bg-purple-600 text-white w-full">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularTouristSpot;