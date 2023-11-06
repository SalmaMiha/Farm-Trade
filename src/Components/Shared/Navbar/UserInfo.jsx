import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserInfo = () => {
  const [user, setUser] = useState([]);

  const currentUser = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${currentUser.user.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div className="flex items-center gap-2 mr-5">
      <p className="font-bold">{user.name}</p>
      <img className="h-10 rounded-full" src={user.image} alt="" />
    </div>
  );
};

export default UserInfo;
