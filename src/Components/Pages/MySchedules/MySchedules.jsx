import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlineDown } from "react-icons/ai";

const MySchedules = () => {
  const [mySchedules, setMySchedules] = useState([]);

  let pending = 0;
  let inProgress = 0;
  let completed = 0;

  const currentUser = useContext(AuthContext);

  const url = `https://farm-trade-server.vercel.app/myschedules/${currentUser.user.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMySchedules(res.data);
    });
  }, []);

  mySchedules.map((schedule) => {
    if (schedule.status == "Pending") {
      pending++;
    }
    if (schedule.status == "In Progress") {
      inProgress++;
    }
    if (schedule.status == "Completed") {
      completed++;
    }
  });

  const handleStatus = (currentStatus, id) => {
    fetch(`https://farm-trade-server.vercel.app/schedulestatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: currentStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = mySchedules.filter(
            (schedule) => schedule._id !== id
          );
          const updated = mySchedules.find((schedule) => schedule._id === id);
          updated.status = currentStatus;
          const newBookings = [updated, ...remaining];
          setMySchedules(newBookings);
        }
      });
  };

  if (mySchedules.length < 1) {
    return (
      <div className="flex justify-center my-20">
        <p className="font-semibold text-lg text-center">
          You have no order yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-28 mt-10 mb-20">
      <h2 className="mb-5 font-quicksand font-bold text-2xl text-center">
        My Schedules
      </h2>
      <div className="flex gap-10 justify-center">
        <p className="text-lg">
          Pending Order: <span className="font-bold text-green">{pending}</span>
        </p>
        <p className="text-lg">
          Order in Progress:{" "}
          <span className="font-bold text-green">{inProgress}</span>
        </p>
        <p className="text-lg">
          Completed Order:{" "}
          <span className="font-bold text-green">{completed}</span>
        </p>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Image</th>
                <th className="p-3">name</th>
                <th className="p-3">Date</th>
                <th className="p-3">Customer Email</th>
                <th className="p-3">Instruction</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mySchedules.map((schedule) => (
                <tr
                  key={schedule._id}
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="p-3">
                    <img
                      className="h-12 rounded-md"
                      src={schedule.image}
                      alt=""
                    />
                  </td>
                  <td className="p-3">
                    <p>{schedule.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{schedule.date}</p>
                  </td>
                  <td className="p-3">
                    <p>{schedule.bookingEmail}</p>
                  </td>
                  <td className="p-3 ">
                    <p>{schedule.instruction}</p>
                  </td>
                  <td className="p-3 text-right">
                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className=" m-1 bg-green text-white px-2 py-1 rounded-full font-quicksand flex gap-1 items-center"
                      >
                        {schedule.status}
                        <AiOutlineDown></AiOutlineDown>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button
                            onClick={() =>
                              handleStatus("Pending", schedule._id)
                            }
                          >
                            Pending
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleStatus("In Progress", schedule._id)
                            }
                          >
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleStatus("Completed", schedule._id)
                            }
                          >
                            Completed
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
