import { complimentsData } from "../Data/complimentsData";
import "./Compliment.css";

const Compliments = () => {
  return (
    <>
      <h1>compliments section</h1>;
      {complimentsData.map((compliment) => (
        <>
          <div className="compliment-wrapper">
            <img src={compliment.image} alt="hello" />
            <div className="writings">
              <h3>{compliment.name}</h3>
              <span>{compliment.text}</span>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default Compliments;
