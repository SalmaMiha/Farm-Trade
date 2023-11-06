import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { name, image } = service;
  return (
    <div>
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
