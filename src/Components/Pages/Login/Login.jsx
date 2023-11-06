import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../../../assets/login.svg";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const { logIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setError("");
    e.currentTarget.reset();

    logIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        toast.success("Logged in successfully");
        const user = { email };

        // axios
        //   .post("http://localhost:5000/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error);
        if (error.code == "auth/invalid-login-credentials") {
          setError("Wrong email/password");
        }
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Logged in successfully");
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-lightGreen py-10 flex flex-col md:flex-row-reverse items-center md:px-5 lg:px-20">
      <ToastContainer />
      <div className="w-full md:w-1/2">
        <img src={login} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-center text-green">Login Now</h2>
        <div className="w-full mx-auto">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-quicksand font-bold">
                  Email
                </span>
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
                <span className="label-text font-quicksand font-bold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn w-1/2 mx-auto bg-green text-white">
                Login
              </button>
            </div>
          </form>
          <div className="w-2/3 lg:w-1/2 mx-auto">
            <button
              className="btn w-full  btn-outline text-green mb-5"
              onClick={handleLoginWithGoogle}
            >
              <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>
              Sign in with Google
            </button>
          </div>
          <div className="text-center">
            <p>
              Do not have an account?{" "}
              <Link to="/register" className="text-green font-semibold">
                Register
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
