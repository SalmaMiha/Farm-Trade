import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    name,
    image,
    price,
    area,
    description,
    providerName,
    providerImage,
  } = service;
  const slicedDescription = description.slice(0, 100);

  return (
    <div className="bg-lightGrey p-5 flex flex-col mb-5">
      <div className="flex gap-5 pb-2">
        <div>
          <p className="text-end font-quicksand font-bold">Provider</p>
          <div className="pt-2">
            <img className="h-12" src={providerImage} alt="" />
            <p className=" font-bold">{providerName}</p>
          </div>
        </div>
        <img className="h-36" src={image} alt="" />
        <div className="flex-grow">
          <h2 className="font-quicksand font-bold text-lg">{name}</h2>
          <p>{slicedDescription}</p>
          <p>
            Price: <span className="font-semibold">${price}</span>
          </p>
          <p className="font-medium">
            Area: <span className="font-semibold">{area}</span>
          </p>
          <div className=" flex justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-green text-white">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
