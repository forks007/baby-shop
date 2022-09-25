import "./Hero.css";
import { heroData } from "../Data/heroData";

const Hero = () => {
  return (
    <>
      {heroData.map((hero) => (
        <div className="hero-container">
          <div className="hero-text">
            <h1>{hero.heading}</h1>
            <p>{hero.text}</p>
            <button className="btn">Shop Now</button>
          </div>

          <div className="images">
            <img src={hero.image} alt="BigCo Inc. logo" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Hero;
