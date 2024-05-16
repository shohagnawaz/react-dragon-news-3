import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
    const {logInUser} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        // logIn user
        logInUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <h2 className="text-4xl mt-16 font-bold">Login Now</h2>
                <form onSubmit={handleLogin} className="card-body md:w-2/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email" 
                            className="input input-bordered" 
                            required 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Password" 
                            className="input input-bordered" 
                            required 
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New to here? Please
                    <Link to="/register">
                        <button className="btn btn-sm">Register</button>
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default Login;