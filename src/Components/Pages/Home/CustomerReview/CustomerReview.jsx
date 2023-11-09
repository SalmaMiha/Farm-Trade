import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import "swiper/css";

const CustomerReview = () => {
  const [customerReview, setCustomerReview] = useState([]);

  const url = "https://farm-trade-server.vercel.app/reviews";
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setCustomerReview(res.data);
    });
  }, []);

  return (
    <div className="bg-lightGrey px-5 md:px-20 py-10">
      <h2 className="font-quicksand font-bold text-2xl text-center">Review</h2>
      <p className="text-grey text-lg text-center mb-5">
        Customer reviews about us!
      </p>
      <div className="hidden lg:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {customerReview.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-white ml-20 py-10 pl-20 pr-10 rounded-lg relative">
                <img
                  className="absolute w-24 top-1/4 -left-14 rounded-lg"
                  src={review.image}
                  alt=""
                />
                <FaQuoteLeft className="text-2xl text-green"></FaQuoteLeft>

                <div className="flex mt-5">
                  {Array.from({ length: parseInt(review.star) }).map(
                    (_, index) => (
                      <CiStar className="text-lg text-green" key={index} />
                    )
                  )}
                </div>

                <p className="mt-2 mb-3 text-lg">{review.review}</p>
                <h2 className="font-semibold text-lg">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" lg:hidden">
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {customerReview.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-white ml-20 py-10 pl-20 pr-10 rounded-lg relative">
                <img
                  className="absolute w-24 top-1/4 -left-14 rounded-lg"
                  src={review.image}
                  alt=""
                />
                <FaQuoteLeft className="text-2xl text-green"></FaQuoteLeft>

                <div className="flex mt-5">
                  {Array.from({ length: parseInt(review.star) }).map(
                    (_, index) => (
                      <CiStar className="text-lg text-green" key={index} />
                    )
                  )}
                </div>

                <p className="mt-2 mb-3 text-lg">{review.review}</p>
                <h2 className="font-semibold text-lg">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
