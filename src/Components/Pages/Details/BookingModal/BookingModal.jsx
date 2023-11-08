import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const BookingModal = ({ singleService }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { name, image, providerName, providerImage, email, price } =
    singleService;

  const currentUser = useContext(AuthContext);
  const bookingEmail = currentUser.user.email;
  const handleBook = (event) => {
    event.preventDefault();
    setModalOpen(false);

    const form = event.target;

    const date = form.date.value;
    const instruction = form.instruction.value;

    const providerEmail = email;
    const status = "Pending";

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
      status,
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
          window.history.back();
          Swal.fire({
            title: "Success!",
            text: "Service has been booked",
            icon: "success",
            confirmButtonText: "Okay",
            confirmButtonColor: "#495E57",
          });
          // location.reload();
        }
      });
  };

  return (
    <div className={`modal-box ${isModalOpen ? "modal-open" : "modal-closed"}`}>
      <div className="modal-box">
        <img className="h-56" src={image} alt="" />
        <div className="flex flex-col justify-center">
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
              <input
                required
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>

            {/* Instruction */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instruction</span>
              </label>
              <input
                required
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
          <button
            className="btn btn-outline text-green my-2 w-1/2 mx-auto"
            onClick={() => {
              location.reload();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

BookingModal.propTypes = {
  singleService: PropTypes.object,
};

export default BookingModal;
