import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import Newsletter from "./Newsletter/Newsletter";
import PopularServices from "./PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <CustomerReview></CustomerReview>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
