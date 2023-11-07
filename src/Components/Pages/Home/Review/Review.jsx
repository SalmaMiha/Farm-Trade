import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Review = () => {
  const [user, setUser] = useState([]);

  const currentUser = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${currentUser.user.email}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddReview = (event) => {
    event.preventDefault();

    const form = event.target;

    const ratings = form.ratings.value;
    const review = form.review.value;
    const name = user.name;
    const image = user.image;

    const newReview = {
      name,
      image,
      ratings,
      review,
    };

    console.log(newReview);
    event.currentTarget.reset();

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleAddReview}>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-lg font-semibold">Ratings</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="ratings"
              placeholder="Enter Service Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        {/* image */}
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-lg font-semibold">Review</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="review"
              placeholder="Enter Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Review"
          className="btn font-quicksand bg-green font-bold text-white mt-5"
        />
      </form>
    </div>
  );
};

export default Review;
