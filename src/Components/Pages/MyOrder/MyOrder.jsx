import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const [myOrders, setMyOrder] = useState([]);

  const currentUser = useContext(AuthContext);

  const url = `https://farm-trade-server.vercel.app/bookedservices/${currentUser.user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyOrder(res.data);
    });
  }, []);

  if (myOrders.length < 1) {
    return (
      <div className="flex justify-center my-20">
        <p className="font-semibold text-lg text-center">
          You did not order anything yet. <br />
          Want to order some service?
          <br />
          <Link
            className="font-quicksand font-bold text-green underline underline-offset-4"
            to="/services"
          >
            Click Here to see the services.
          </Link>
        </p>
      </div>
    );
  }

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
                <p className=" text-grey mt-2">Date: {order.date}</p>
                <p className=" text-grey mt-1">{order.instruction}</p>
                <p className=" text-grey">Status: {order.status}</p>
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
