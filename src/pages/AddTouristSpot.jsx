import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const AddTouristSpot = () => {

    const { user } = useContext(AuthContext);

    const handleAddTouristSpot = event => {
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
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const photo = form.photo.value;


        const newSpot = { spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorsPerYear,userEmail, userName, photo }
        console.log(newSpot);

        // send data to the server
        fetch('http://localhost:5000/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
            })
        event.target.reset(form);
    }

    return (
        <div className="bg-purple-300 rounded-2xl p-4 md:p-10 mb-4">
            <h2 className="text-3xl text-center text-purple-700 font-extrabold mb-5">Add Tourist Spot</h2>
            <form onSubmit={handleAddTouristSpot}>
                {/* form tourists_spot_name & country_Name row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Tourists Spot Name</span>
                        </label>
                        <input type="text" placeholder="Tourists Spot Name" name="spotName" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Country Name</span>
                        </label>
                        <select className="select select-bordered join-item input w-full" name="countryName" required>
                            <option disabled selected>Select Country Name</option>
                            <option>Bangladesh</option>
                            <option>Thailand</option>
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Vietnam</option>
                            <option>Cambodia</option>
                        </select>
                    </div>
                </div>
                {/* form location & short description row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Location</span>
                        </label>
                        <input type="text" placeholder="Location" name="location" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Short Description</span>
                        </label>
                        <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form average_cost & seasonality row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Average Cost</span>
                        </label>
                        <input type="text" placeholder="Average Cost" name="averageCost" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Seasonality</span>
                        </label>
                        <input type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form travel_time & totalVisitorsPerYear row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Travel Time</span>
                        </label>
                        <input type="text" placeholder="Travel Time" name="travelTime" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Total Visitors Per Year</span>
                        </label>
                        <input type="text" placeholder="Total Visitors Per Year" name="totalVisitorsPerYear" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form User Email & User Name row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">User Email</span>
                        </label>
                        <input type="text" placeholder="User Email" name="userEmail" value={user?.email} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">User Name</span>
                        </label>
                        <input type="text" name="userName" value={user?.displayName} className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form photoURL row */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-purple-700 font-semibold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input type="submit" value="ADD SPOT" className="btn bg-purple-600 btn-block text-white" />
            </form>
        </div>
    );
};

export default AddTouristSpot;