import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoURL, email, password)

        // password validation
        if (password.length < 6) {
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            return;
        }
        else if (!/[a-z]/.test(password)) {
            return;
        }


        // create user
        try {
            const result = createUser(email, password, name, photoURL);
            console.log(result.user);
            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    }

    return (
        <div>
            <h2 className="text-3xl text-center text-purple-700 font-bold">Please Register</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative mb-4">
                        <input
                            className="w-full input input-bordered"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Set your password"
                            id="" required />
                        <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-purple-600 text-white">Register</button>
                </div>
            </form>
            <p className="text-center mb-4">Already have an account? Please <Link className="text-purple-600 font-bold" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;