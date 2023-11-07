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

      <div className="dropdown">
        <label tabIndex={0} className="btn m-1  btn-outline text-green">
          <HiMenu></HiMenu>Dashboard
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <p className="font-bold">{user.name}</p>

            <p className="">{user.email}</p>
            <hr />
          </li>
          <li>
            <Link to="/add">Add Service</Link>
          </li>
          <li>
            <Link to="/my-services">My All Services</Link>
          </li>
          <li>
            <Link>My Schedules</Link>
          </li>
          <li>
            <Link>My Order</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
