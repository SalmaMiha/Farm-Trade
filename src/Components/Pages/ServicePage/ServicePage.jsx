import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Typewriter } from "react-simple-typewriter";

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  const url = "https://farm-trade-server.vercel.app/services";
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setServices(res.data);
    });
  }, []);

  useEffect(() => {
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredServices(filtered);
  }, [searchQuery, services]);

  return (
    <div className="mx-28 my-10">
      <h1 className="text-center py-5 text-2xl font-bold font-quicksand">
        Enjoy our{" "}
        <span className="text-green">
          <Typewriter
            words={["organic vegetable", "fresh meat", "homemade items"]}
            loop={10}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </h1>

      {/* search */}
      <div className="flex justify-center mb-5">
        <input
          type="text"
          name="Search"
          placeholder="Search for service here"
          className="input input-bordered border-green border-2 w-96"
          id=""
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* services */}
      {filteredServices.map((service) => (
        <div key={service._id}>
          <ServiceCard service={service}></ServiceCard>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
