import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomerReview = ({ isVisible }) => {
  const [customerReview, setCustomerReview] = useState([]);

  const url = "http://localhost:5000/reviews";
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setCustomerReview(res.data);
    });
  }, []);

  return (
    <div className="bg-lightGrey px-20 py-10">
      <h2 className="font-quicksand font-bold text-2xl text-center">Review</h2>
      <p className="text-grey text-lg text-center">
        Customer reviews about us!
      </p>
      <p>Anabia</p>
      <AnimatePresence>
        {isVisible && (
          <motion.div exit={{ x: "-100vh", opacity: 0 }} key="my-div">
            Watch me go woosh!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerReview;
