import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard/PopularServiceCard";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);

  const url = "http://localhost:5000/services";
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setPopularServices(res.data);
    });
  }, []);

  return (
    <div className="mx-20 mb-16">
      <h2 className="text-2xl font-quicksand font-bold text-center mt-10 mb-5">
        Popular Services
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {popularServices.slice(0, 4).map((popularService) => (
          <div key={popularService._id}>
            <PopularServiceCard
              popularService={popularService}
            ></PopularServiceCard>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 ">
        <Link to="/services">
          <button className="btn bg-beige font-bold font-quicksand shadow-lg">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
