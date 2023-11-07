import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const UserInfo = () => {
  const [user, setUser] = useState([]);

  const currentUser = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${currentUser.user.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="flex items-center gap-2 mr-5">
      <img className="h-10 rounded-full" src={user.image} alt="" />

      <details className="dropdown">
        <summary className="m-1 btn btn-outline text-green">
          <HiMenu></HiMenu>Dashboard
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <p className="font-bold">{user.name}</p>

            <p className="">{user.email}</p>
            <hr />
          </li>
          <li>
            <Link to="/add">Add Service</Link>
          </li>
          <li>
            <Link>My All Services</Link>
          </li>
          <li>
            <Link>My Pending Services</Link>
          </li>
          <li>
            <Link>Booked Services</Link>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default UserInfo;
