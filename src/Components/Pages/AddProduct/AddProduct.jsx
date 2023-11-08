import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddProduct = () => {
  const [user, setUser] = useState([]);

  const currentUser = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://farm-trade-server.vercel.app/users/${currentUser.user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const providerName = form.providerName.value;
    const email = form.email.value;
    const price = form.price.value;
    const description = form.description.value;
    const area = form.area.value;
    const providerImage = user.image;

    const newProduct = {
      name,
      image,
      providerName,
      providerImage,
      email,
      price,
      description,
      area,
    };

    console.log(newProduct);
    event.currentTarget.reset();

    fetch("https://farm-trade-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Product Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
            confirmButtonColor: "#495E57",
          });
        }
      });
  };

  return (
    <div className="mx-20 my-10">
      <div className="bg-lightGrey px-24 py-10">
        <h2 className="text-3xl font-extrabold mb-5 text-center text-green">
          Add Your Service Here
        </h2>
        <form onSubmit={handleAddProduct}>
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
                  placeholder="Enter Service Name"
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
                  placeholder="Enter Image URL"
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
                  value={`${user.name}`}
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
                  value={`${user.email}`}
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
                  placeholder="Enter Price"
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
                  placeholder="Enter Service Area"
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
                placeholder="Enter A Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="w-full flex justify-center">
            <input
              type="submit"
              value="Add Product"
              className="btn font-quicksand bg-green font-bold text-white mt-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
