import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
//import { AuthContext } from "../../Providers/AuthProvider";

const ServicePage = () => {
  //const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  const url = "http://localhost:5000/services";
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setServices(res.data);
    });
  }, []);
  return (
    <div>
      <p>{services.length}</p>
      {services.map((service) => (
        <div key={service._id}>
          <ServiceCard service={service}></ServiceCard>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
