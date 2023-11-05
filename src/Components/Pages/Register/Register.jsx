import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../../../assets/login.svg";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, image, email, password);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("*Password should be at least 6 characters or longer");
      return;
    } else if (!/(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    }
    e.currentTarget.reset();

    createUser(email, password)
      .then((result) => {
        toast.success("Sign up completed successfully");
        console.log(result);
        // const user = { name, email, image };
        // fetch("https://pantry-hub-server.vercel.app/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //       console.log("user added to the database");
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-lightGreen py-10 flex flex-col md:flex-row items-center md:px-5 lg:px-20">
      <ToastContainer></ToastContainer>
      <div className="w-full md:w-1/2">
        <img className="" src={login} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold font-quicksand text-center">
          Register Now
        </h2>
        <div className="w-full mx-auto">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-quicksand font-bold">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-quicksand font-bold">
                  Profile Picture
                </span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Photo Url"
                className="input input-bordered"
                required
              />
            </div>
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
              {registerError && <p className="text-red-600">{registerError}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn w-1/3 mx-auto bg-green text-white">
                Register
              </button>
            </div>
          </form>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-green font-semibold">
                Login
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
