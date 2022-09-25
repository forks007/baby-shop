import { servicesData } from "../Data/sevicesData";
import "./Services.css";

const Serivces = () => {
  return (
    <>
      <div className="services-strap">
        {servicesData.map((service) => (
          <div className="service">
            <i class={service.icon}></i>
            <h2>{service.name}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Serivces;
