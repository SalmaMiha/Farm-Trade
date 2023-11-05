import banner from "../../../../assets/basket-full-vegetables.png";
const Banner = () => {
  return (
    <div className="">
      <section className="bg-lightGreen ">
        <div className="pl-36 container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around gap-5">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">
              Welcome to <br />
              <span className="text-green">Farm Trade</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Where Backyards Blossom and Kitchens Thrive! Start trading today
              and nurture a greener, tastier tomorrow!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-green text-white"
              >
                Explore More
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-grey"
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
