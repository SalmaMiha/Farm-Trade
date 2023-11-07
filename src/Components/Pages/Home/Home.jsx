import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import PopularServices from "./PopularServices/PopularServices";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <CustomerReview></CustomerReview>
      <Review></Review>
    </div>
  );
};

export default Home;
