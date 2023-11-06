import banner from "../../../../assets/basket-full-vegetables.png";
const Banner = () => {
  return (
    <div className="">
      <section className="bg-lightGreen ">
        <div className="lg:pl-36 container flex flex-col-reverse justify-center mx-auto lg:py-10 lg:flex-row lg:justify-around md:gap-5">
          <div className="flex flex-col justify-center p-6 text-center rounded-md lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold md:text-6xl">
              Welcome to <br />
              <span className="text-green">Farm Trade</span>
            </h1>
            <p className="mt-6 mb-8 text-lg md:mb-12">
              Where Backyards Blossom and Kitchens Thrive! Start trading today
              and nurture a greener, tastier tomorrow!
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:gap-5 md:justify-center md:space-y-0  lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 w-1/2 mx-auto md:w-1/4 md:mx-0 lg:w-full text-center  text-lg font-semibold rounded bg-green text-white"
              >
                Explore More
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 w-1/2 mx-auto md:w-1/4 md:mx-0 lg:w-full text-center text-lg font-semibold border rounded text-green border-green"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={banner}
              alt=""
              className="object-contain h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
