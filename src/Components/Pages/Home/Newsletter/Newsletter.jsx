const Newsletter = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const user = { email };

    event.currentTarget.reset();

    fetch("http://localhost:5000/newsletter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
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
      <h2 className="font-quicksand text-2xl font-bold">Newsletter</h2>
      <p className="text-grey text-lg text-center pb-5">
        Sign up now to receive the latest information as well as promotions from
        us
      </p>
      <form onSubmit={handleSubscribe}>
        <div className="flex items-center gap-3">
          <div className="flex relative">
            <div className="form-control w-64 md:w-96">
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="input w-full rounded-full"
              />
            </div>
            <div className="absolute left-48 md:left-80 bottom-0">
              <input
                type="submit"
                value="Subscribe"
                className="btn font-quicksand rounded-full bg-green font-bold text-white mt-5"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
