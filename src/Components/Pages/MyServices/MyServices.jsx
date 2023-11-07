import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);

  const currentUser = useContext(AuthContext);

  const url = `http://localhost:5000/myservices/${currentUser.user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyServices(res.data);
    });
  }, []);

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
              <tr key={myService.id}>
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
                  <button className="btn btn-ghost btn-xs text-red-700">
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
