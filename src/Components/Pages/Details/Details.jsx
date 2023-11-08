import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [singleService, setSingleServices] = useState({});
  const { id } = useParams();

  const url = `http://localhost:5000/services/${id}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setSingleServices(res.data);
    });
  }, []);

  const { image, name, price, description, providerName, providerImage, area } =
    singleService;

  return (
    <div className="flex gap-10 mx-28 mb-20 mt-10">
      <div className="w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="w-2/3">
        <h2 className="text-4xl font-bold font-quicksand text-center">
          {name}
        </h2>
        <p className="text-center mt-2 text-grey px-20">{description}</p>
        <p className="text-green font-bold font-quicksand text-2xl text-center mt-3">
          ${price}
        </p>
        <div className="flex justify-center my-5">
          <button className="btn bg-green text-white">Book Now</button>
        </div>
        <hr />

        <div>
          <p className="font-quicksand font-bold text-lg mt-2">
            Provider Information:
          </p>
          <div className="flex gap-3 items-center">
            <img className="rounded-full h-16" src={providerImage} alt="" />
            <p className="font-bold text-xl">{providerName}</p>
          </div>
          <p className="mt-2 text-lg">
            Service Providing Area:{" "}
            <span className="font-semibold">{area}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
