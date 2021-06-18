import React from "react";
import PrimaryButton from "../UI/PrimaryButton";
import "./Hero.scss"
const Hero = ({ subheading, heading, src }) => {
  return (
    <article className="Hero" style={{ backgroundImage: `url(${src})` }}>
      <div className="wrapper">
        <h4>{subheading}</h4>
        <h1>{heading}</h1>
        <PrimaryButton
          func={() => console.log("Hola Mundo!")}
          text={"¡Me apunto!"}
        />
      </div>
    </article>
  );
};

export default Hero;
