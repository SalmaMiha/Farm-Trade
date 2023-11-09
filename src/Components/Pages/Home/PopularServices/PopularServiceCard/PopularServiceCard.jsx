import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularServiceCard = ({ popularService }) => {
  const { _id, image, name, description, price, providerImage, providerName } =
    popularService;

  let sliceDescription = description.slice(0, 97);
  if (description.length > 100) {
    sliceDescription = sliceDescription + "...";
  }

  return (
    <div className="p-5 bg-beige h-[450px] rounded-lg flex flex-col shadow-lg">
      <img className="h-36" src={image} alt="" />
      <div className="flex-grow">
        <h3 className="font-semibold mt-2 text-lg">{name}</h3>
        <p>{sliceDescription}</p>
        <p>
          Price: <span className="font-semibold">${price}</span>
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <img className="h-10 rounded-full" src={providerImage} alt="" />
        <p>{providerName}</p>
      </div>
      <div className="flex justify-center">
        <Link to={`/details/${_id}`}>
          <button className="btn bg-green text-white mt-3">View Details</button>
        </Link>
      </div>
    </div>
  );
};

PopularServiceCard.propTypes = {
  popularService: PropTypes.object,
};

export default PopularServiceCard;
