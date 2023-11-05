import banner from "../../../../assets/basket-full-vegetables.png";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-10 items-center py-10 bg-lightGreen">
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>
      <div className="text-center flex flex-col items-center w-1/2">
        <p className="text-2xl font-medium mb-3 ">Welcome to</p>
        <h1 className="text-5xl font-extrabold mb-5 text-green font-quicksand px-3 py-2">
          Farm Trade
        </h1>
        <p className=" mx-16">
          Welcome to Farm Trade – Where Backyards Blossom and Kitchens Thrive!
          Explore the bountiful world of homegrown goodness, where gardeners,
          farmers, and food enthusiasts come together to swap, share, and savor
          the fruits of their labor. Join our vibrant community and discover the
          joy of fresh, local, and sustainable living. Start trading today and
          nurture a greener, tastier tomorrow!
        </p>
        <button className="bg-green text-white btn btn-outline mt-4">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Banner;
