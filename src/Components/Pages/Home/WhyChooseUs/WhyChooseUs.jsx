import { PiCertificateFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <div className="mx-20 md:mx-10 lg:mx-20 my-10">
      <h2 className="text-2xl text-center mb-5 font-bold font-quicksand">
        Why Choose Us
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <div className="p-10 shadow-lg bg-lightGreen rounded-lg flex flex-col items-center">
          <FaUsers className="text-6xl text-green"></FaUsers>
          <p className="font-semibold text-center text-xl mt-3">
            50+ Regular Customer
          </p>
          <p className="text-center text-grey">
            Customer appreciates our organic food
          </p>
        </div>
        <div className="p-10 shadow-lg bg-lightGreen rounded-lg flex flex-col items-center">
          <TbTruckDelivery className="text-6xl text-green"></TbTruckDelivery>
          <p className="font-semibold text-center text-xl mt-3">
            1500+ Successful Delivery
          </p>
          <p className="text-center text-grey">
            We take the honour to sucessfully deliver your order
          </p>
        </div>
        <div className="p-10 shadow-lg bg-lightGreen rounded-lg flex flex-col items-center">
          <PiCertificateFill className="text-6xl text-green"></PiCertificateFill>
          <p className="font-semibold text-center text-xl mt-3">
            Certified by ABC
          </p>
          <p className="text-center text-grey">
            Tusted and Certified by ABC organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
