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
    <div
      className="flex flex-col items-center my-10 p-20 "
      style={{
        backgroundImage: "url(https://i.ibb.co/n07zBcG/background-2.jpg)",
      }}
    >
      <h2 className="font-quicksand text-2xl font-bold pb-5">
        Share Your Feedback
      </h2>
      <form onSubmit={handleAddReview}>
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">Ratings: </p>
          <div className="form-control">
            <select name="ratings" className="w-full p-3 rounded-lg">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="flex relative">
            <div className="form-control w-96">
              <input
                type="text"
                name="review"
                placeholder="Your Feedback"
                className="input input-bordered w-full"
              />
            </div>
            <div className="absolute left-80 bottom-0">
              <input
                type="submit"
                value="Add Review"
                className="btn font-quicksand bg-green font-bold text-white mt-5"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;
