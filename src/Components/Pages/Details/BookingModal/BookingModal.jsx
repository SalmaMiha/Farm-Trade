import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const BookingModal = ({ singleService }) => {
  const { name, image, providerName, providerImage, email, price } =
    singleService;

  const currentUser = useContext(AuthContext);
  const bookingEmail = currentUser.user.email;
  const handleBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const date = form.date.value;
    const instruction = form.instruction.value;

    const providerEmail = email;

    const bookedService = {
      name,
      image,
      bookingEmail,
      providerName,
      providerImage,
      providerEmail,
      price,
      date,
      instruction,
    };

    console.log(bookedService);

    fetch("http://localhost:5000/bookedservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Service has been booked",
              icon: "success",
              confirmButtonText: "Okay",
              confirmButtonColor: "#495E57",
            });
          }
        }
      });
  };

  return (
    <div>
      <div className="modal-box">
        <img className="h-56" src={image} alt="" />
        <div className="">
          <form method="dialog" onSubmit={handleBook}>
            {/* Service name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="input input-bordered"
                readOnly
              />
            </div>

            {/* Price*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={`$${price}`}
                name="price"
                className="input input-bordered"
                readOnly
              />
            </div>

            {/* provider email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Provider Email</span>
              </label>
              <input
                type="text"
                defaultValue={email}
                name="providerEmail"
                className="input input-bordered"
                readOnly
              />
            </div>

            {/* user email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                defaultValue={bookingEmail}
                name="bookingEmail"
                className="input input-bordered"
                readOnly
              />
            </div>

            {/* date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>

            {/* Instruction */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instruction</span>
              </label>
              <input
                type="text"
                placeholder="Enter address and contact number"
                name="instruction"
                className="input input-bordered"
              />
            </div>

            <div className="flex justify-center mt-2">
              <button className="btn bg-green text-white">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

BookingModal.propTypes = {
  singleService: PropTypes.object,
};

export default BookingModal;
