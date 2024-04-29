import { useLoaderData } from "react-router-dom";


const CountryViewDetails = () => {

    const spotDetails = useLoaderData();

    return (
        <div>
            <div className="hero mt-8">
                <div className="hero-content gap-5 flex-col lg:flex-row">
                    <img src={spotDetails.photo} className="rounded-lg shadow-xl bg-base-300 h-[80vh] w-full md:w-1/2" />
                    <div className="space-y-2 py-2">
                        <h1 className="text-2xl font-bold">{spotDetails.spotName}</h1>
                        <p className="text-xl"> <span className="font-bold">Country Name: </span> {spotDetails.countryName}</p>
                        <hr />
                        <p><span className="font-bold">Location: </span>{spotDetails.location}</p>
                        <p><span className="font-bold">Short Description: </span>{spotDetails.shortDescription}</p>
                        <p><span className="font-bold">Average Cost: </span>{spotDetails.averageCost}</p>
                        <hr />
                        <p><span className="font-bold">Seasonality: </span>{spotDetails.seasonality}</p>
                        <p><span className="font-bold">Travel Time: </span>{spotDetails.travelTime}</p>
                        <p><span className="font-bold">Total Visitors Per Year: </span>{spotDetails.totalVisitorsPerYear}</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryViewDetails;