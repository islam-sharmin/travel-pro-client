import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyList = () => {

    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://travel-pro-server-two.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [user]);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://travel-pro-server-two.vercel.app/myList/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = items.filter(itm => itm._id !== id);
                            setItems(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <h2 className="text-purple-700 font-bold text-2xl text-center w-full mb-8 mt-4">My Added Tourist Spot List</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Spot Name</th>
                            <th>Country Name</th>
                            <th>Average Cost</th>
                            <th>Travel Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            items?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.spotName}</td>
                                <td>{item.countryName}</td>
                                <td>{item.averageCost}</td>
                                <td>{item.travelTime}</td>
                                <td><div className="flex flex-col justify-center gap-4">
                                    <Link to={`/update/${item._id}`}>
                                    <button className="btn bg-purple-600 text-white w-3/5 ">UPDATE <GrUpdate className="w-4 h-4 text-white" /></button>
                                    </Link>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-600 text-white w-3/5">DELETE <MdDeleteForever className="w-5 h-5 text-white" /></button>
                                </div></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;