import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import Newsletter from "./Newsletter/Newsletter";
import PopularServices from "./PopularServices/PopularServices";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <WhyChooseUs></WhyChooseUs>
      <CustomerReview></CustomerReview>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
