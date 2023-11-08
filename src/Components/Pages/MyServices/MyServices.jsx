import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);

  const currentUser = useContext(AuthContext);

  const url = `https://farm-trade-server.vercel.app/myservices/${currentUser.user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyServices(res.data);
    });
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://farm-trade-server.vercel.app/service/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Service has been deleted.",
                "success"
              );
              const remaining = myServices.filter((cof) => cof._id !== _id);
              setMyServices(remaining);
            }
          });
      }
    });
  };

  if (myServices.length === 0) {
    return (
      <div className="flex justify-center my-20">
        <p className="font-semibold text-lg text-center">
          You did not add any service yet. <br />
          Want to add some service?
          <br />
          <Link
            className="font-quicksand font-bold text-green underline underline-offset-4"
            to="/add"
          >
            Click Here to add product.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-5 md:mx-20 my-10">
      <h2 className="text-center font-quicksand text-2xl font-bold">
        My Services
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Service</th>
              <th className="text-center">Description</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myServices.map((myService) => (
              <tr key={myService._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myService.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{myService.name}</div>
                    </div>
                  </div>
                </td>
                <td>{myService.description}</td>
                <td>${myService.price}</td>
                <th className="flex">
                  <Link to={`/update/${myService._id}`}>
                    <button className="btn btn-ghost btn-xs text-green">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(`${myService._id}`)}
                    className="btn btn-ghost btn-xs text-red-700"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
