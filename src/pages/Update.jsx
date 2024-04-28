import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const spots = useLoaderData();

    const handleUpdateTouristSpot = event => {
        event.preventDefault();

        const form = event.target;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const photo = form.photo.value;
        

        const newSpot = { spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear, photo }
        console.log(newSpot);

        // send data to the server
        fetch(`http://localhost:5000/allTouristSpots/${spots._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
            })
    }

    return (
        <div className="bg-purple-300 rounded-2xl p-4 md:p-10 mb-4">
            <h2 className="text-3xl text-center text-purple-700 font-extrabold mb-5">Update Tourist Spot</h2>
            <form onSubmit={handleUpdateTouristSpot}>
                {/* form tourists_spot_name & country_Name row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Tourists Spot Name</span>
                        </label>
                        <input type="text" defaultValue={spots.spotName} name="spotName" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Country Name</span>
                        </label>
                        <input type="text" defaultValue={spots.countryName} name="countryName" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form location & short description row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Location</span>
                        </label>
                        <input type="text" defaultValue={spots.location} name="location" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Short Description</span>
                        </label>
                        <input type="text" defaultValue={spots.shortDescription} name="shortDescription" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form average_cost & seasonality row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Average Cost</span>
                        </label>
                        <input type="text" defaultValue={spots.averageCost} name="averageCost" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Seasonality</span>
                        </label>
                        <input type="text" defaultValue={spots.seasonality} name="seasonality" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form travel_time & totalVisitorsPerYear row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Travel Time</span>
                        </label>
                        <input type="text" defaultValue={spots.travelTime} name="travelTime" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Total Visitors Per Year</span>
                        </label>
                        <input type="text" defaultValue={spots.totalVisitorsPerYear} name="totalVisitorsPerYear" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form photoURL row */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={spots.photo} name="photo" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input type="submit" value="UPDATE" className="btn bg-purple-600 btn-block text-white" />
            </form>
        </div>
    );
};

export default Update;