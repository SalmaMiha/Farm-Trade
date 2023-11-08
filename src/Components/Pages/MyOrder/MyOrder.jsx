import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyOrder = () => {
  const [myOrders, setMyOrder] = useState([]);

  const currentUser = useContext(AuthContext);

  const url = `https://farm-trade-server.vercel.app/bookedservices/${currentUser.user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyOrder(res.data);
    });
  }, []);
  return (
    <div className="mx-28 mt-10 mb-20">
      <h2 className="mb-5 font-quicksand font-bold text-2xl text-center">
        My Orders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {myOrders.map((order) => (
          <div key={order._id} className=" p-5 shadow-lg">
            <div className="flex gap-2 mb-2">
              <div>
                <img className="h-40" src={order.image} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{order.name}</h2>
                <p className="text-lg">
                  Price: <span className=" font-semibold">${order.price}</span>
                </p>
                <p className=" text-grey mt-3">Date: {order.date}</p>
                <p className=" text-grey mt-2">{order.instruction}</p>
              </div>
            </div>
            <hr />
            <h3 className="my-2 font-semibold">Provider Information</h3>
            <div className="flex gap-2">
              <img
                className="h-14 rounded-full items-center"
                src={order.providerImage}
                alt=""
              />
              <div>
                <p className="font-bold font-quicksand">{order.providerName}</p>
                <p className="text-grey">{order.providerEmail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
