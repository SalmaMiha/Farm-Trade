import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {
  const [service, serService] = useState({});
  const { id } = useParams();

  const url = `http://localhost:5000/services/${id}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      serService(res.data);
    });
  }, []);

  const handleUpdateService = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const providerName = form.providerName.value;
    const email = form.email.value;
    const price = form.price.value;
    const description = form.description.value;
    const area = form.area.value;
    const providerImage = service.providerImage;

    const updatedService = {
      name,
      image,
      providerName,
      providerImage,
      email,
      price,
      description,
      area,
    };

    console.log(updatedService);

    fetch(`http://localhost:5000/myservices/${service._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Service Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload(); // Reload the page
            }
          });
        }
      });
  };

  return (
    <div className="mx-20 my-10">
      <div className="bg-lightGrey px-24 py-10">
        <h2 className="text-3xl font-extrabold mb-5 text-center text-green">
          Update Service
        </h2>
        <form onSubmit={handleUpdateService}>
          <div className="md:flex gap-5 ">
            {/* name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Service Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={service.name}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* image */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={service.image}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-5">
            {/* Provider name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Provider Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="providerName"
                  defaultValue={service.providerName}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>

            {/* Provider email */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Provider Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={service.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-5">
            {/* price */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={service.price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* service area */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Service Area
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="area"
                  defaultValue={service.area}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={service.description}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="w-full flex justify-center">
            <input
              type="submit"
              value="Update"
              className="btn font-quicksand bg-green font-bold text-white mt-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
